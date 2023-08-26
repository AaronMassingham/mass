import React, { ReactNode } from "react";

//Constants
import { genericFadeOutVariants } from "@constants/FramerVariants";

//Styled Components
import { Container } from "@styles/styled-components/data-display/NoData";

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

export default NoData;
