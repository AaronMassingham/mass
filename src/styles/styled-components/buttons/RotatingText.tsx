import { motion } from "framer-motion";
import styled from "styled-components";

import { SvgProps } from "@typescriptTypes/styledComponentTypes";

export const Container = styled(motion.div)`
	height: 100%;
	width: 100%;
	display: grid;
	place-items: center center;
`;
export const Svg = styled(motion.svg)<SvgProps>`
	position: relative;
	width: 160px;

	& > text {
		letter-spacing: ${(props) => props.$spacing && `${props.$spacing}rem`};
		font-size: ${(props) => props.$sizing && `${props.$sizing}rem`};
	}
`;

export const Div = styled(motion.div)`
	width: 55%;
	height: 55%;
	position: absolute;
	border-radius: 100%;
	left: 22.5%;
	top: 22.5%;

	&:before,
	&:after {
		content: " ";
		position: absolute;
		border-radius: 100%;
	}

	&:before {
		z-index: 5;
		background: var(--gray900);
		width: calc(100% - 4px);
		height: calc(100% - 4px);
		left: 2px;
		top: 2px;
	}
	&:after {
		z-index: -1;
		background: linear-gradient(45deg, rgba(255, 42, 72, 1) 0%, rgba(255, 125, 42, 1) 100%);
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}
`;
