import React, { forwardRef } from "react";

//Types
import { ButtonProps } from "@typescriptTypes/buttonTypes";

//Styled Components
import { Container } from "@styles/styled-components/buttons/Default";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ onClick, isLoading, text, fullw, buttonType }, ref) => {
		const typeIsString = typeof text === "string";
		return (
			<Container
				$fixWidth={typeIsString}
				$fill={fullw}
				disabled={isLoading}
				onClick={onClick}
				ref={ref}
				type={buttonType}
			>
				{text}
			</Container>
		);
	}
);

Button.displayName = "Button";

export default Button;
