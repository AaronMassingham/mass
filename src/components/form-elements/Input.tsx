import type { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface InputGroupProps extends ComponentPropsWithoutRef<"input"> {
	label?: string;
	value?: string | number;
	tag?: string;
}

const Input = ({ label, tag, value, ...rest }: InputGroupProps) => {
	return (
		<Container>
			{tag && <div>{tag}</div>}
			{label && <label>{label}</label>}
			<InputElement value={value} {...rest} />
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	& > div {
		position: absolute;
		top: 0;
		right: 0;
		border-radius: 0 var(--radius);
		font-size: 0.6rem;
		background-color: var(--secondaryLight);
		padding: 0.1rem 0.3rem;
		color: var(--primaryDark);
	}
`;
const InputElement = styled.input`
	width: 100%;
	min-height: 3rem;
	padding: 0.75rem var(--padding);
	font-size: 0.8rem;
	border: 1px solid var(--secondaryLight);
	border-radius: var(--radius);
	background-color: transparent;
	transition: all 0.2s ease;
	position: relative;
	text-transform: uppercase;
	color: var(--bodyTextColor);
	font-weight: 200;
	&:hover,
	&:focus {
		border: 1px solid var(--bodyTextColor);
		outline: 0;
	}
	&:disabled {
		color: var(--secondaryLight);
	}
	// &:-webkit-outer-spin-button,
	// :-webkit-inner-spin-button {
	// 	-webkit-appearance: none;
	// 	margin: 0;
	// }
	// &[type="number"] {
	// 	-moz-appearance: textfield;
	// }
`;

export default Input;
