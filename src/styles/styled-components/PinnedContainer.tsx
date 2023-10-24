import { motion } from "framer-motion";
import styled from "styled-components";
export const Container = styled(motion.form)`
	width: calc(100% + 4rem);
	padding: 0 2rem;
	height: auto;
	min-height: 120px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	position: relative;
	background: var(--gray800);
	z-index: 1;
	&:before,
	&:after {
		position: absolute;
		z-index: 8;
		width: 2rem;
		height: 2rem;
		bottom: -2rem;
		left: 0;
		content: "";
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' viewBox='0 0 65 65'%3E%3Cpath fill='%23111111' d='M0 65A65 65 0 0 1 65 0v-2H-2v67h2z'/%3E%3C/svg%3E");
	}
	&:after {
		left: unset;
		right: 0;
		transform: rotate(90deg);
	}
	& > div {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 6rem;
		&:last-of-type {
			transform: translateY(0.5rem);
			max-width: 70%;
			margin: auto;
			position: relative;
			z-index: 5;
		}
	}
	& button {
		position: relative;

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
	}
`;
