import React, { useRef } from "react";
import styled from "styled-components";

//Context
import { useWorkoutContext } from "@contexts/WorkoutContextAlt";

//Components
import ExerciseListItem from "@components/data-display/ExerciseListItem";

//Styled Components
import { Container } from "@styles/styled-components/data-display/ExerciseList";

const ExerciseList = () => {
	const { workoutState } = useWorkoutContext();
	const exerciseData = workoutState.exercises;

	const listRef = useRef<HTMLDivElement>(null);

	return (
		<Container>
			{exerciseData.map((item, index) => (
				<ExerciseListItem listRef={listRef} key={index} completedExercises={item} />
			))}
		</Container>
	);
};

export default ExerciseList;
