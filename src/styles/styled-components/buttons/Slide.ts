import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
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
