import React, { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import RotatingText from "@components/RotatingText";

//Constants
import { pinnedButtonVariants } from "@constants/FramerVariants";

type Props = {
	icon: ReactNode;
	text: "start" | "continue" | "add" | "loading";
};

const FancyButton = ({ icon, text }: Props) => {
	return (
		<Container {...pinnedButtonVariants}>
			{icon}
			<RotatingText variant={text} />
		</Container>
	);
};

const Container = styled(motion.button)`
	height: 130px;
	width: 130px;
	overflow: clip;
	display: grid;
	place-items: center;
	aspect-ratio: 1 / -1;
	position: relative;
	cursor: pointer;
	& > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
	&:before,
	&:after {
		position: absolute;

		transform: translateY(0) translateX(0);
		content: "";
		border-radius: 100%;
	}
	&:after {
		height: 85px;
		width: 85px;
		z-index: -2;
		background: linear-gradient(45deg, rgba(255, 42, 72, 1) 0%, rgba(255, 125, 42, 1) 100%);
	}
	&:before {
		height: 80px;
		width: 80px;
		background: var(--gray900);
		z-index: -1;
	}
`;

export default FancyButton;
