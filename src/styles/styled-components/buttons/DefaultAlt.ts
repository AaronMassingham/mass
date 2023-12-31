import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.button)`
	position: relative;
	width: 3rem;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: initial;
	border: 0;
	border-radius: 2rem;
	color: var(--gray900);
	background-color: white;
	cursor: pointer;
	&:disabled,
	&[disabled] {
		background-color: var(--gray700);
		cursor: initial;
	}
	transition: background-color 0.5s ease;
	&:before,
	&:after {
		content: "";
		position: absolute;
		width: 150%;
		height: 150%;
		border-radius: 100%;
		background: var(--gray800);
		z-index: -1;
	}
	&:after {
		background: linear-gradient(
			90deg,
			rgba(255, 125, 42, 1) 0%,
			rgba(255, 42, 72, 1) 50%,
			rgba(255, 125, 42, 1) 100%
		);
		z-index: -2;
		transform: translateY(2px);
	}
`;
