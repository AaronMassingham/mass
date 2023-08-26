import React, { forwardRef } from "react";

//Types
// import { DefaultButtonType } from "@typescriptTypes/ComponentTypes";

//Styled Components
import { Container } from "@styles/styled-components/buttons/DefaultAlt";

const DefaultButton = forwardRef<HTMLButtonElement, DefaultButtonType>(
	({ onClick, isLoading, text, buttonType }, ref) => {
		return (
			<Container disabled={isLoading} onClick={onClick} ref={ref} type={buttonType}>
				{text}
			</Container>
		);
	}
);

DefaultButton.displayName = "Button";

type DefaultButtonType = {
	text: string | React.ReactNode;
	isLoading?: boolean;
	buttonType?: "submit" | "reset" | "button";
	fullw?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default DefaultButton;
