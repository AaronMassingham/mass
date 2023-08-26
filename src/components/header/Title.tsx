import React, { MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";

//Components
import Seperator from "@components/misc/Seperator";

//Styled Components
import { Container } from "@styles/styled-components/header/Title";

const Title = ({ text, secondaryText, variant, onClick }: Props) => {
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
	variant: "default" | "plain";
	onClick?: MouseEventHandler<HTMLElement>;
};

export default Title;
