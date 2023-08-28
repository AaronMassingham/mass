//Types
import { PreviousWorkoutItemType } from "@typescriptTypes/WorkoutTypes";

//Styled Components
import { Container } from "@styles/styled-components/data-display/PreviousWorkoutListItem";

const PreviousWorkoutListItem = ({ title, date, vol }: PreviousWorkoutItemType) => {
	return (
		<Container>
			<h2>{title}</h2>
			<div>
				<span>
					<strong>Vol</strong> {vol}kg
				</span>
				<span>{date}</span>
			</div>
		</Container>
	);
};
export default PreviousWorkoutListItem;
