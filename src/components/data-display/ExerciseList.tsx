import React, { useRef } from "react";

//Context
import { useWorkoutContext } from "@contexts/WorkoutContext";

//Components
import ExerciseListItem from "@components/data-display/ExerciseListItem";
import ScrollableContainer from "@components/wrappers/ScrollContainer";

//Styled Components
import { Container } from "@styles/styled-components/data-display/ExerciseList";

const ExerciseList = () => {
	const { workoutState } = useWorkoutContext();
	const exerciseData = workoutState.exercises;

	const listRef = useRef<HTMLDivElement>(null);

	return (
		<Container>
			<ScrollableContainer data={exerciseData}>
				{exerciseData.map((item, index) => (
					<ExerciseListItem listRef={listRef} key={index} completedExercises={item} />
				))}
			</ScrollableContainer>
		</Container>
	);
};

export default ExerciseList;
