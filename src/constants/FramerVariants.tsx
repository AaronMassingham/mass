import { MotionProps } from "framer-motion";

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
