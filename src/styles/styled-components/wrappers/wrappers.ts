import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import { WrapperProps } from "@typescriptTypes/styledComponentTypes";

export const ScrollableContainer = styled.div`
	height: 100%;
	overflow: scroll;
	position: relative;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const LayoutContainer = styled(motion.div)<WrapperProps>`
	max-height: ${(props) => (props.$hasSibling === false ? "unset" : "calc(100% - 220px)")};
	${(props) => {
		switch (props.$variant) {
			case "main":
				return css`
					flex: 1;
					display: flex;
					flex-direction: column;
					min-height: calc(100% - 220px);
					overflow: hidden;
					height: 100%;
					scrollbar-width: none;
					&::-webkit-scrollbar {
						display: none;
					}
				`;
			case "pinned":
				return css`
					position: sticky;
					z-index: 3;
					bottom: 0;
					left: 0;
					right: 0;
					height: 220px;
					padding-bottom: var(--padding);
					margin-bottom: -1rem;
					background-color: var(--gray900);
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				`;
		}
	}}
`;
