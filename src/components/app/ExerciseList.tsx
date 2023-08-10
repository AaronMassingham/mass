import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";

//Context
import { WorkoutContext } from "@contexts/WorkoutContext";

//Components
import ExerciseListItem from "@components/app/ExerciseListItem";

const ExerciseList = () => {
	const { workoutState } = useContext(WorkoutContext);
	const exerciseData = workoutState.exercises;

	const containerRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLDivElement>(null);
	const [listItems] = useState([]);

	useEffect(() => {
		scrollToBottom();
	}, [listItems]);

	function scrollToBottom() {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		}
	}

	return (
		<Container>
			<div ref={containerRef}>
				{exerciseData.map((item) => (
					<ExerciseListItem listRef={listRef} key={item.exerciseId} completedExercises={item} />
				))}
			</div>
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	gap: 0.5rem;
	padding: calc(var(--padding) * 1.5) 0;
	border-bottom: 1px solid var(--secondaryLight);
	&:last-of-type {
		border: 0;
	}
`;

export default ExerciseList;
