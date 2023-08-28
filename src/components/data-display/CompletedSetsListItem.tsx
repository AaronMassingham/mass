//Components
import Times from "@components/icons/Times";

//Types
import { CompletedSetsListItemType } from "@typescriptTypes/WorkoutTypes";

//Styled Components
import { Container, Value } from "@styles/styled-components/data-display/CompletedSetsListItem";

const CompletedSetsListItem = ({
	setNumber,
	weight,
	repetitions,
	children,
}: CompletedSetsListItemType) => {
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
