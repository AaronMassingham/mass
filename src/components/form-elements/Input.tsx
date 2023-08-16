import { ComponentPropsWithoutRef, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface InputGroupProps extends ComponentPropsWithoutRef<"input"> {
	label?: string;
	value?: string | number;
	tag?: string;
	hasError?: boolean;
}

const Input = ({ label, tag, value, hasError, ...rest }: InputGroupProps) => {
	const [isFocused, setIsFocused] = useState(false);
	return (
		<Container>
			{tag && <Tag>{tag}</Tag>}
			{label && <label>{label}</label>}
			{hasError && <Error>Error</Error>}
			<InputElement
				onFocus={() => {
					setIsFocused(true);
				}}
				onBlur={() => {
					setIsFocused(false);
				}}
				value={value}
				{...rest}
			/>
			<FocusIndicator animate={{ scaleY: isFocused ? 1 : 0 }} transition={{ duration: 0.25 }} />
		</Container>
	);
};

const Error = styled(motion.div)`
	color: red;
	position: absolute;
	top: -2rem;
	left: 0;
	width: 100%;
	height: 2rem;
`;
const FocusIndicator = styled(motion.div)`
	position: absolute;
	bottom: 0;
	z-index: 0;
	transform-origin: bottom;
	height: 100%;
	width: 100%;
	background-color: var(--gray800);
	pointer-events: none;
`;
const Tag = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	font-size: 0.6rem;
	background-color: transparent;
	padding: 0.1rem 0.3rem;
	color: var(--gray900);
`;
const Container = styled.div`
	position: relative;
	width: 100%;

	&:before {
		z-index: 4;
		position: absolute;
		width: 100%;
		height: 3px;
		bottom: 0;
		left: 0;
		content: " ";
		background: #ffffff;
	}
`;
const InputElement = styled.input`
	position: relative;
	z-index: 3;
	width: 100%;
	min-height: 3rem;
	padding: 1.5rem var(--padding);

	font-size: 1rem;
	text-align: center;
	transition: border 0.2s ease;
	text-transform: uppercase;
	font-weight: 200;

	border: 0;
	color: #ffffff;
	background-color: transparent;

	&:hover,
	&:focus {
		outline: 0;
	}
	&::placeholder {
		transition: color 0.2s ease 0.25s;
	}
	&:focus::placeholder {
		color: transparent;
	}
	&:disabled {
		color: var(--gray700);
	}
`;

export default Input;
