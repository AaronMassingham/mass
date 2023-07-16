import React, { useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

//Context
import { WorkoutContext } from "@contexts/WorkoutContext";

//Components
import NoData from "@components/NoData";
import ExerciseListItem from "@components/app/ExerciseListItem";
import Button from "@components/Button";
import Times from "@components/icons/Times";

const ExerciseList = () => {
	const router = useRouter();
	const { workoutState } = useContext(WorkoutContext);
	const exerciseData = workoutState.exercises;

	const checkDataLength = exerciseData.length !== 0 ? true : false;

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
		<>
			<Container>
				{checkDataLength ? (
					<div ref={containerRef}>
						{exerciseData.map((item) => (
							<ExerciseListItem listRef={listRef} key={item.exerciseId} completedExercises={item} />
						))}
					</div>
				) : (
					<NoData message="Add your first exercise" />
				)}
			</Container>
			<Button
				onClick={() => {
					router.push("/exercise");
				}}
				text={<Times isRotated fillColor="var(--primaryDark)" />}
			/>
		</>
	);
};

const Container = styled.div`
	border-bottom: 1px solid var(--primaryColor);
	margin-bottom: var(--padding);
	position: relative;
	padding-bottom: 2rem;
	& > div {
		padding: 2rem 0 var(--padding) 0;
		max-height: calc(100vh - 21rem);

		overflow: scroll;
		overscroll-behaviour: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
	&:before {
		position: absolute;
		z-index: 10;
		right: 0;
		top: 0;
		height: 2.5rem;
		width: 100%;
		content: "";
		background: linear-gradient(
			0deg,
			rgba(var(--primaryDarkGrad), 0) 0%,
			rgba(var(--primaryDarkGrad), 1) 100%
		);
	}
`;

export default ExerciseList;
