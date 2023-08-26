import { MotionProps } from "framer-motion";

export const fadeInOutVariants: MotionProps = {
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

export const slideInUpVariant: MotionProps = {
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

export const fadeInFromLeftVariant: MotionProps = {
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

export const headerTitleParentAnimation: MotionProps = {
	initial: "hidden",
	animate: "visible",
	exit: "exit",

	variants: {
		hidden: {
			height: "0rem",
			transition: { when: "beforeChildren", duration: 0.5 },
		},
		visible: {
			height: "2rem",
			transition: { duration: 0.5 },
		},
		exit: {
			height: "0rem",
			transition: { when: "afterChildren", duration: 0.5 },
		},
	},
};

export const headerTitleChildAnimation: MotionProps = {
	initial: "hidden",
	animate: "visible",
	exit: "hidden",

	variants: {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.35,
				delay: 0.5,
			},
		},
	},
};

export const dialogVariants: MotionProps = {
	initial: "hidden",
	animate: "visible",
	exit: "hidden",

	variants: {
		hidden: {
			opacity: 0,
			y: 10,
			transition: { delay: 0.25 },
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { delay: 0.25 },
		},
	},
};
