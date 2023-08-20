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
	height: 160px;
	width: 160px;

	cursor: pointer;
	overflow: hidden;
	position: relative;
	display: grid;
	place-items: center;
	aspect-ratio: 1 / -1;
	& > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
		&:first-child {
			z-index: 5;
		}
	}
`;

export default FancyButton;
