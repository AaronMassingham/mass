import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.button)`
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
