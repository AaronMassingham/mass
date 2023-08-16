import React, { MouseEventHandler, ReactNode } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Components
import Seperator from "./Seperator";

type Props = {
	text: null | string;
	secondaryText?: string | ReactNode;
	onClick?: MouseEventHandler<HTMLElement>;
	variant: "default" | "plain";
};

const Heading = ({ text, secondaryText, onClick, variant }: Props) => {
	const isPlain = variant === "plain";

	return (
		<Container $variant={variant} layout="position">
			<h1 onClick={onClick}>{text}</h1>
			<motion.span>{secondaryText && secondaryText}</motion.span>
			{!isPlain && <Seperator direction="down" />}
		</Container>
	);
};

interface ContainerProps {
	$variant: "default" | "plain";
}

const Container = styled(motion.div)<ContainerProps>`
	position: sticky;
	top: 0;
	z-index: 5;
	text-align: center;
	display: grid;
	gap: 0.5rem;
	flex: 0 0 auto;
	&:after {
		position: absolute;
		width: 100%;
		height: 100%;
		background: var(--gray900);
		content: "";
		z-index: -1;
		bottom: 0;
	}
	& span {
		color: var(--brand500);
		height: 1.2rem;
	}
	${(props) => {
		switch (props.$variant) {
			case "default":
				return css`
					padding-top: 0.5rem;
					& h1 {
						padding-bottom: 1rem;
					}
				`;
			case "plain":
				return css`
					padding: 2rem 0 2rem 0;
				`;
		}
	}}
`;

export default Heading;
