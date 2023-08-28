//Types
import { Exercise } from "@typescriptTypes/WWorkoutTypes";

//Components
import Times from "@components/icons/Times";

//Helpers
import { calculateVolume } from "@helpers/calculationHelpers";

//Types
import { ExerciseListItemType } from "@typescriptTypes/WWorkoutTypes";

//Styled Components
import {
	Container,
	Details,
	ListItem,
	OverflowList,
} from "@styles/styled-components/data-display/ExerciseListItem";

const ExerciseListItem = ({ completedExercises, listRef }: ExerciseListItemType) => {
	const { name, sets } = completedExercises;

	const volume = calculateVolume(completedExercises.sets);

	return (
		<Container ref={listRef}>
			<Details>
				<div>{name}</div>
				<div>
					<strong>Vol</strong> {volume}kg
				</div>
			</Details>
			<OverflowList>
				<div>
					{sets.map((set, index) => (
						<ListItem key={set.set_id}>
							<div>{index + 1}</div>
							{set.weight} <Times /> {set.repetitions}
						</ListItem>
					))}
				</div>
			</OverflowList>
		</Container>
	);
};

export default ExerciseListItem;
