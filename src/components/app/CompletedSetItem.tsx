import React from "react";

import styled from "styled-components";

//Components
import Input from "@components/form-elements/Input";
import Times from "@components/icons/Times";

type Props = {
	setNumber: number;
	weight: number;
	repetitions: number;
	setId: number;
	children: React.ReactNode;
};

const CompletedSetItem = ({ setNumber, weight, repetitions, children }: Props) => {
	return (
		<Container>
			<div>Set {setNumber}</div>
			<div>
				<Input tag="kg" type="text" disabled placeholder={weight.toString()} />
				<Times />
				<Input tag="reps" type="text" disabled placeholder={repetitions.toString()} />
			</div>
			{children}
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	& > div:first-child {
		width: 100%;
		padding-bottom: 0.5rem;
		color: var(--primaryColor);
	}
	& > div:not(:first-child) {
		width: calc(100% - 5rem);
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
`;

export default CompletedSetItem;
