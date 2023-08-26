import React, { forwardRef } from "react";

//Types
import { DefaultButtonType } from "@typescriptTypes/componentTypes";

//Styled Components
import { Container } from "@styles/styled-components/buttons/Default";

const DefaultButton = forwardRef<HTMLButtonElement, DefaultButtonType>(
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

DefaultButton.displayName = "Button";

export default DefaultButton;
