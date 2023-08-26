import styled from "styled-components";
import { motion } from "framer-motion";

import { CompleteSetsListProps } from "@typescriptTypes/styledComponentTypes";

export const Container = styled(motion.div)<CompleteSetsListProps>`
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	position: relative;
	flex: 1;
	gap: 1rem;
	& strong {
		color: var(--brand500);
	}
	& button {
		width: 1rem;
	}
	&:before {
		position: absolute;
		top: 2rem;
		bottom: 0;
		width: 1px;
		background: var(--gray700);
		content: "";
		left: 50%;
		transform: translateX(-0.5px);

		${(props) =>
			props.$hasSets
				? `
			opacity:1;
			transition: opacity 1s ease 1s;
		`
				: `
		opacity:0;
		transition: opacity .5s ease 0s;`}

`;
