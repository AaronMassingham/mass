import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

//Constants
import { pinnedButtonVariants } from "@constants/FramerVariants";

//Types
import { SlideButtonType } from "@typescriptTypes/CComponentTypes";

//Styled Components
import { Container } from "@styles/styled-components/buttons/Slide";

const SlideButton = ({ onDragEnd, text }: SlideButtonType) => {
	const minDragThreshold = 200;
	const buttonControls = useAnimation();
	const [draggedPastThreshold, setDraggedPastThreshold] = useState(false);

	const handleDragEnd = (_event: MouseEvent | TouchEvent, info: { point: { x: number } }) => {
		if (Math.abs(info.point.x) > minDragThreshold) {
			onDragEnd();
			setDraggedPastThreshold(true);
		}
	};
	if (draggedPastThreshold) {
		buttonControls.start({ x: "calc(100% - 100px)" });
	}

	return (
		<Container key="slide-button" {...pinnedButtonVariants}>
			<motion.div layout>
				<motion.button
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					onDragEnd={handleDragEnd}
					animate={buttonControls}
					dragTransition={{ bounceStiffness: 300, bounceDamping: 100 }}
				>
					{text}
				</motion.button>
			</motion.div>
		</Container>
	);
};

export default SlideButton;
