import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

interface SlideButtonProps {
	onDragEnd: () => void;
	text: string;
}

const SlideButton: React.FC<SlideButtonProps> = ({ onDragEnd, text }) => {
	const minDragThreshold = 50;
	const buttonControls = useAnimation();
	const [draggedPastThreshold, setDraggedPastThreshold] = useState(false);

	const handleDragEnd = (_event: MouseEvent | TouchEvent, info: { point: { x: number } }) => {
		if (Math.abs(info.point.x) > minDragThreshold) {
			onDragEnd();
			setDraggedPastThreshold(true);
		}
	};
	if (draggedPastThreshold) {
		buttonControls.start({ x: "100%" });
	}

	return (
		<Container>
			<div>
				<motion.button
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					onDragEnd={handleDragEnd}
					animate={buttonControls}
					dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
				>
					{text}
				</motion.button>
			</div>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	margin-bottom: 0.5rem;
	& div {
		border-radius: 3rem;
		height: 3rem;
		width: 100%;
		background: linear-gradient(45deg, rgba(255, 42, 72, 1) 0%, rgba(255, 125, 42, 1) 100%);

		padding: 4px;
		position: relative;
		&:before {
			content: "";
			position: absolute;
			top: 1px;
			left: 1px;
			height: calc(100% - 2px);
			width: calc(100% - 2px);
			background: var(--primaryDark);
			border-radius: 3rem;
		}

		& button {
			position: relative;
			z-index: 2;
			height: 100%;
			width: 40%;
			background: white;
			border-radius: 3rem;
		}
	}
`;

export default SlideButton;
