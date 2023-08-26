import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.button)`
	width: 16px;
	height: 100%;
	position: absolute;
	left: var(--padding);
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	& svg {
		position: absolute;
		width: 16px;
		height: 30px;
	}

	& > div {
		width: 16px;
		height: 30px;

		clip-path: url(#myClipPath);
		background: linear-gradient(45deg, rgba(255, 42, 72, 1) 0%, rgba(255, 125, 42, 1) 100%);
	}
`;
