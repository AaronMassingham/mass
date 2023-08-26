import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
	height: -webkit-fill-available;
	& > div:last-of-type {
		position: relative;
		height: calc(100% - 4rem);
	}

	& ul {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: -webkit-fill-available;
		overflow-y: scroll;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}
		& > li {
			height: 4rem;
			display: grid;
			place-items: center;
			border-bottom: 1px solid var(--gray700);
			cursor: pointer;
		}
	}
`;
