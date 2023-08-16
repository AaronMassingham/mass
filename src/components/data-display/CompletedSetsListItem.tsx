import React, { ReactNode } from "react";
import styled from "styled-components";

//Components
import Times from "@components/icons/Times";

type Props = {
	setNumber: number;
	weight: number;
	repetitions: number;
	setId: number;
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

const Value = styled.div`
	border-bottom: 1px solid var(--gray700);
	flex: 1;
	border-radius: var(--radius);
	padding-bottom: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

const Container = styled.div`
	width: 100%;

	margin: auto;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	position: relative;
	z-index: 2;
	scroll-snap-align: start; //<-- causing janky behaviour on state update
	& > div {
		&:first-child,
		&:last-child {
			width: 1rem;
			color: var(--brand500);
		}
	}
`;

export default CompletedSetsListItem;
