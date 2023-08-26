import styled from "styled-components";
import { UserImageProps } from "@typescriptTypes/SStyledComponentTypes";

export const Container = styled.div<UserImageProps>`
	width: ${(props) => props.$width && `${props.$width}rem`};
	aspect-ratio: 1;
	border-radius: 100%;
	position: relative;
	transform-style: preserve-3d;
	border: 3px solid var(--gray800);
	& img {
		border-radius: 100%;
	}
	& > *:not(img) {
		z-index: 5;
	}
	&:before {
		content: "";
		position: absolute;

		background: linear-gradient(
			0deg,
			rgba(var(--gray900Grad), 1) 10%,
			rgba(var(--gray900Grad), 0) 50%
		);
		bottom: -1px;
		left: 0;
		height: 100%;
		width: 100%;
		border-radius: 4rem;
		z-index: 1;
	}
	&:after {
		content: "";
		position: absolute;
		background: linear-gradient(45deg, rgba(255, 42, 72, 1) 0%, rgba(255, 125, 42, 1) 100%);
		width: 120%;
		height: 120%;
		border-radius: 100%;
		transform: translateZ(-1px);
		top: -10%;
		left: -10%;
	}
`;
