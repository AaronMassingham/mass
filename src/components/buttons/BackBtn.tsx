import React, { MouseEvent } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

//Constants
import { backButtonVariants } from "@constants/FramerVariants";

const BackBtn = () => {
	const router = useRouter();

	const handleBackButton = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		router.back();
	};

	return (
		<Container onClick={handleBackButton} {...backButtonVariants}>
			<svg viewBox="0 0 16 30">
				<clipPath id="myClipPath">
					<path d="M13.5,29.6L0.7,16.7c-0.9-0.9-0.9-2.4,0-3.4L13.5,0.4c0.6-0.6,1.5-0.6,2.1,0l0,0c0.6,0.6,0.6,1.5,0,2.1L3.1,15l12.5,12.5c0.6,0.6,0.6,1.5,0,2.1l0,0C15,30.1,14.1,30.1,13.5,29.6z" />
				</clipPath>
			</svg>
			<div />
		</Container>
	);
};

const Container = styled(motion.button)`
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

export default BackBtn;
