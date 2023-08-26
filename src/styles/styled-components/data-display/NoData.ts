import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
	height: 100%;
	padding-bottom: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	& > div {
		color: var(--gray700);
		border-radius: 100%;
		height: 250px;
		width: 250px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	& small {
		font-size: 0.8rem;
		padding-top: 0.5rem;
		max-width: 50%;
		text-align: center;
	}
`;
