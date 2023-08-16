import React, { useRef } from "react";
import styled from "styled-components";

//Context
import { useWorkoutContext } from "@contexts/WorkoutContextAlt";

//Components
import ExerciseListItem from "@components/data-display/ExerciseListItem";

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

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 2rem;

	padding: calc(var(--padding) * 1.5) 0;
	overflow: hidden;
`;

export default ExerciseList;
