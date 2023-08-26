import React, { MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";

//Components
import Seperator from "@components/misc/Seperator";

//Styled Components
import { Container } from "@styles/styled-components/header/Heading";

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
type Props = {
	text: null | string;
	secondaryText?: string | ReactNode;
	onClick?: MouseEventHandler<HTMLElement>;
	variant: "default" | "plain";
};

export default Heading;
