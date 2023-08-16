import React, { ReactNode } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

//Constants
import { genericFadeOutVariants } from "@constants/FramerVariants";

type MessageProps = {
	type: "message";
	message: string;
	smalltext?: string;
	hasIcon?: never;
};

type ImageProps = {
	type: "image";
	hasIcon: ReactNode;
	message?: never;
	smalltext?: never;
};

type Props = MessageProps | ImageProps;

const NoData = (props: Props) => {
	const content =
		props.type === "message" ? (
			<div style={{ border: "1px dashed var(--gray700)" }}>
				<h1>{props.message}</h1>
				{props.smalltext && <small>{props.smalltext}</small>}
			</div>
		) : (
			<div style={{ opacity: 0.2 }}>{props.hasIcon}</div>
		);

	return (
		<Container layout="size" {...genericFadeOutVariants}>
			{content}
		</Container>
	);
};

const Container = styled(motion.div)`
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

export default NoData;
