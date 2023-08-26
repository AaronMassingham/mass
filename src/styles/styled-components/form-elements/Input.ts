import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 100%;

	&:before {
		z-index: 4;
		position: absolute;
		width: 100%;
		height: 3px;
		bottom: 0;
		left: 0;
		content: " ";
		background: #ffffff;
	}
`;

export const Error = styled(motion.div)`
	color: red;
	position: absolute;
	top: -2rem;
	left: 0;
	width: 100%;
	height: 2rem;
`;
export const FocusIndicator = styled(motion.div)`
	position: absolute;
	bottom: 0;
	z-index: 0;
	transform-origin: bottom;
	height: 100%;
	width: 100%;
	background-color: var(--gray800);
	pointer-events: none;
`;
export const Tag = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	font-size: 0.6rem;
	background-color: transparent;
	padding: 0.1rem 0.3rem;
	color: var(--gray900);
`;

export const InputElement = styled.input`
	position: relative;
	z-index: 3;
	width: 100%;
	min-height: 3rem;
	padding: 1.5rem var(--padding);

	font-size: 1rem;
	text-align: center;
	transition: border 0.2s ease;
	text-transform: uppercase;
	font-weight: 200;

	border: 0;
	color: #ffffff;
	background-color: transparent;

	&:hover,
	&:focus {
		outline: 0;
	}
	&::placeholder {
		transition: color 0.2s ease 0.25s;
	}
	&:focus::placeholder {
		color: transparent;
	}
	&:disabled {
		color: var(--gray700);
	}
`;
