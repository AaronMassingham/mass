import { MotionProps } from "framer-motion";

export const genericFadeOutVariants: MotionProps = {
	initial: "hidden",
	animate: "visible",
	exit: "hidden",
	variants: {
		hidden: {
			opacity: 0,
			transition: { duration: 0.35 },
		},
		visible: {
			opacity: 1,
			transition: { duration: 0.35 },
		},
	},
};
export const listItemVariant = {
	initial: "hidden",
	animate: "visible",
	exit: "exit",
	variants: {
		hidden: {
			y: 40,
			x: 0,
			opacity: 0,
		},
		visible: {
			y: 0,
			x: 0,
			opacity: 1,
		},
		exit: {
			opacity: 0,
			y: 0,
		},
	},
};
export const backButtonVariants: MotionProps = {
	initial: "hidden",
	animate: "visible",
	exit: "exit",
	variants: {
		hidden: {
			opacity: 0,
			x: -40,
			transition: {
				type: "inertia",
				velocity: 50,
			},
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "inertia",
				velocity: 50,
			},
		},
		exit: {
			opacity: 0,
			x: -40,
			transition: {
				type: "inertia",
				velocity: -50,
			},
		},
	},
};

export const pinnedButtonVariants: MotionProps = {
	initial: "hidden",
	animate: "visible",
	exit: "hidden",
	variants: {
		hidden: {
			y: 20,
			opacity: 0,
			transition: {
				ease: "easeOut",
				opacity: {
					duration: 0.5,
				},
			},
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				ease: "easeOut",
				opacity: {
					duration: 0.5,
				},
			},
		},
	},
};

export const rotatingTextAnimation: MotionProps = {
	animate: "visible",

	variants: {
		visible: {
			rotate: [0, -360],
			transition: {
				ease: "linear",
				duration: 60,
				repeat: Infinity,
			},
		},
	},
};
