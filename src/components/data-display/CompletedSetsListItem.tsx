//Components
import Times from "@components/icons/Times";

//Types
import { CompletedSetsListItemType } from "@typescriptTypes/WorkoutTypes";

//Styled Components
import { Container, Value } from "@styles/styled-components/data-display/CompletedSetsListItem";

//Constants
import { slideInUpVariant } from "@constants/FramerVariants";

const CompletedSetsListItem = ({
	setNumber,
	weight,
	repetitions,
	children,
}: CompletedSetsListItemType) => {
	return (
		<Container
			layout
			style={{ height: "20%", display: "flex" }}
			transition={{
				layout: {
					duration: 0.25,
				},
			}}
			{...slideInUpVariant}
		>
			<div>{setNumber}</div>

			<Value>{weight.toString()}</Value>
			<Times bgColor="var(--gray900)" fillColor="var(--brand500)" />
			<Value>{repetitions.toString()}</Value>

			<div>{children}</div>
		</Container>
	);
};

export default CompletedSetsListItem;
