import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
	position: relative;
	z-index: 10;

	&:before,
	&:after {
		position: absolute;
		z-index: 2;
		width: 2rem;
		height: 2rem;
		bottom: -2rem;
		content: "";
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' viewBox='0 0 65 65'%3E%3Cpath fill='%23111111' d='M0 65A65 65 0 0 1 65 0v-2H-2v67h2z'/%3E%3C/svg%3E");
	}
	&:after {
		right: 0;
		transform: rotate(90deg);
	}
	& > div:first-of-type {
		background: var(--gray800);
	}

	& > header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: var(--padding);
		background-color: var(--gray800);
		position: relative;
		z-index: 2;
		& > div:first-of-type {
			flex: 1;
			text-align: center;
		}
	}
`;
