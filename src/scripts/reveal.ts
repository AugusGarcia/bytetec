import { animate, inView, stagger } from "motion";

const reducedMotion = window.matchMedia(
	"(prefers-reduced-motion: reduce)",
).matches;

const groups = Array.from(
	document.querySelectorAll<HTMLElement>("[data-reveal-group]"),
);

if (!reducedMotion && groups.length > 0) {
	for (const group of groups) {
		// A group already scrolled past on load must stay readable.
		if (group.getBoundingClientRect().bottom < 0) continue;

		const elements = Array.from(
			group.querySelectorAll<HTMLElement>("[data-reveal]"),
		);

		const rise = elements.filter((element) => {
			const variant = element.dataset.reveal;
			return !variant || variant === "rise";
		});
		const slides = elements.filter(
			(element) => element.dataset.reveal === "slide",
		);
		const lists = elements
			.filter((element) => element.dataset.reveal === "list")
			.map((element) => Array.from(element.children) as HTMLElement[]);
		const masks = elements
			.filter((element) => element.dataset.reveal === "mask")
			.map((element) =>
				Array.from(element.querySelectorAll<HTMLElement>(":scope > * > *")),
			);

		const hidden = [...rise, ...slides, ...lists.flat(), ...masks.flat()];

		if (hidden.length === 0) continue;

		for (const element of hidden) element.style.opacity = "0";

		// One observer per group keeps the scroll cost flat.
		inView(
			group,
			() => {
				if (slides.length > 0) {
					animate(
						slides,
						{ opacity: [0, 1], x: [-32, 0] },
						{ duration: 0.7, ease: [0.22, 1, 0.36, 1] },
					);
				}

				if (rise.length > 0) {
					animate(
						rise,
						{ opacity: [0, 1], y: [28, 0] },
						{ duration: 0.7, delay: stagger(0.07), ease: [0.22, 1, 0.36, 1] },
					);
				}

				for (const items of lists) {
					if (items.length === 0) continue;

					animate(
						items,
						{ opacity: [0, 1], y: [18, 0] },
						{ duration: 0.6, delay: stagger(0.09), ease: [0.22, 1, 0.36, 1] },
					);
				}

				for (const items of masks) {
					if (items.length === 0) continue;

					animate(
						items,
						{ opacity: [0, 1], y: ["110%", "0%"] },
						{ duration: 0.8, delay: stagger(0.08), ease: [0.22, 1, 0.36, 1] },
					);
				}
			},
			{ amount: "some", margin: "0px 0px -10% 0px" },
		);
	}
}
