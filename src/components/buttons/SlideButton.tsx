import React, { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import styled from "styled-components";

//Constants
import { pinnedButtonVariants } from "@constants/FramerVariants";

interface SlideButtonProps {
	onDragEnd: () => void;
	text: string;
}

const SlideButton = ({ onDragEnd, text }: SlideButtonProps) => {
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

const Container = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	margin-bottom: 1rem;
	& div {
		border-radius: 3rem;
		height: 3rem;
		width: 100%;
		background: var(--gray700);
		padding: 4px;
		position: relative;
		&:before {
			content: "";
			position: absolute;
			top: 1px;
			left: 1px;
			height: calc(100% - 2px);
			width: calc(100% - 2px);
			background: var(--gray900);
			border-radius: 3rem;
		}

		& button {
			position: relative;
			z-index: 2;
			height: 100%;
			width: 200px;
			background: white;
			border-radius: 3rem;
		}
	}
`;

export default SlideButton;
