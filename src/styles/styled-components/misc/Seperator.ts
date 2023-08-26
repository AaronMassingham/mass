import styled from "styled-components";

import { SeperatorProps } from "@typescriptTypes/StyledComponentTypes";

export const Container = styled.div<SeperatorProps>`
	transform: ${(props) => props.$direction === "up" && "rotate(180deg)"};
	& > div {
		margin-top: 0;
		width: 100%;
		height: 1px;
		background: linear-gradient(
			90deg,
			rgba(10, 10, 10, 1) 0%,
			rgba(255, 125, 42, 1) 7%,
			rgba(255, 42, 72, 1) 50%,
			rgba(255, 125, 42, 1) 93%,
			rgba(10, 10, 10, 1) 100%
		);
		& > div {
			margin: auto;
			width: 0;
			height: 0;
			border-left: 5px solid transparent;
			border-right: 5px solid transparent;
			border-top: 5px solid rgba(255, 42, 72, 1);
		}
	}
`;
