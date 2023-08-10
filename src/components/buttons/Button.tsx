import React from "react";
import styled from "styled-components";

//Types
import { ButtonProps } from "@typescriptTypes/buttonTypes";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ onClick, isLoading, text, fullw, buttonType }, ref) => {
		const typeIsString = typeof text === "string";
		return (
			<ButtonElement
				$fixWidth={typeIsString}
				$fill={fullw}
				disabled={isLoading}
				onClick={onClick}
				ref={ref}
				type={buttonType}
			>
				{text}
			</ButtonElement>
		);
	}
);

interface IButton {
	$fixWidth?: boolean;
	$fill?: boolean;
}

const ButtonElement = styled.button<IButton>`
	position: relative;
	display: flex;
	height: 3rem;
	justify-content: center;
	align-items: center;
	font-size: initial;
	border: 0;
	border-radius: 2rem;
	color: var(--primaryDark);
	background-color: white;
	cursor: pointer;
	${(props) => (props.$fixWidth ? null : " width:3rem;")}
	${(props) => (props.$fill ? "width:100%;" : null)}
	&:disabled,
	&[disabled] {
	}
	transition: opacity 0.2s ease;
`;

Button.displayName = "Button";

export default Button;
