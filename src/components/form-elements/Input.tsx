import { ComponentPropsWithoutRef, useState } from "react";

//Styled Components
import {
	Container,
	Error,
	FocusIndicator,
	InputElement,
	Tag,
} from "@styles/styled-components/form-elements/Input";

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

export default Input;
