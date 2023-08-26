import React, { ReactNode } from "react";

//Components
import Times from "@components/icons/Times";

//Styled Components
import { Container, Value } from "@styles/styled-components/data-display/CompletedSetsListItem";

type Props = {
	set_id: number;
	weight: number;
	repetitions: number;
	setNumber: number;
	children: ReactNode;
};

const CompletedSetsListItem = ({ setNumber, weight, repetitions, children }: Props) => {
	return (
		<Container>
			<div>{setNumber}</div>

			<Value>{weight.toString()}</Value>
			<Times bgColor="var(--gray900)" fillColor="var(--brand500)" />
			<Value>{repetitions.toString()}</Value>

			<div>{children}</div>
		</Container>
	);
};

export default CompletedSetsListItem;
