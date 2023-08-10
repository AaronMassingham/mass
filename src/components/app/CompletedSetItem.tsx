import styled from "styled-components";

//Components
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
			<div>{setNumber}</div>

			<Value>{weight.toString()}</Value>
			<Times fillColor="var(--primaryColor)" />
			<Value>{repetitions.toString()}</Value>

			<div>{children}</div>
		</Container>
	);
};

const Value = styled.div`
	border-bottom: 1px solid var(--secondaryLight);
	flex: 1;
	border-radius: var(--radius);
	padding-bottom: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

const Container = styled.div`
	max-width: 75%;
	width: 100%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	& > div {
		&:first-child,
		&:last-child {
			width: 1rem;
			color: var(--primaryColor);
		}
	}
`;

export default CompletedSetItem;
