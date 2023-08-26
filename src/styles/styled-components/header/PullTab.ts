import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
	width: 100%;
	background: var(--gray800);
	display: flex;
	justify-content: center;
	text-align: center;
	position: relative;
	font-size: 0.8rem;
	& div:first-of-type {
		position: relative;
		display: flex;
		align-items: center;
		text-align: center;
	}
	& div:last-of-type {
		position: absolute;
		height: 1.5rem;
		min-width: 4rem;
		padding: 0 1rem;

		background: var(--gray800);
		& svg {
			position: absolute;
			height: 100%;
			aspect-ratio: 1/0.5;
			fill: var(--gray800);
			top: 0;
			right: 100%;
			&:last-of-type {
				left: unset;
				right: -3rem;
				transform: rotateY(180deg);
			}
		}
	}
`;
