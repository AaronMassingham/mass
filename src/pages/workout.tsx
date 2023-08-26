import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { styled } from "styled-components";
//Contexts
import { useWorkoutContext, initialWorkoutState } from "@contexts/WorkoutContext";

//Types
import { Workout } from "@typescriptTypes/workoutTypes";
import { Hydrated } from "@typescriptTypes/miscTypes";

//Components
import SetWorkoutName from "@components/forms/SetWorkoutName";
import ExerciseList from "@components/data-display/ExerciseList";
import FancyButton from "@components/buttons/Fancy";
import WrapperContainer from "@components/wrappers/WrapperContainer";
import Plus from "@components/icons/Plus";
import SlideButton from "@components/buttons/Slide";
import StartWorkoutImage from "@components/icons/StartWorkoutImage";

export default function Workout({ isHydrated }: Hydrated) {
	const router = useRouter();

	const { workoutState, setWorkoutState } = useWorkoutContext();
	const [completedExercises, setCompletedExercises] = useState([]);

	const hasExercises = workoutState.exercises.length >= 1;
	const hasWorkoutName = workoutState.name !== null;

	const uploadWorkout = () => {
		if (hasWorkoutName) {
			setCompletedExercises((prevState: any) => ({
				...prevState,
				workouts: [workoutState],
			}));

			setWorkoutState(initialWorkoutState);
			router.push("/");
		} else {
			console.log("no name given!");
		}
	};

	return (
		isHydrated && (
			<>
				<Head>
					<title>MASS WORKOUT TRACKER</title>
				</Head>

				<WrapperContainer variant="main">
					<ExerciseList />
				</WrapperContainer>

				<WrapperContainer variant="pinned">
					<AnimatePresence>
						{hasWorkoutName ? (
							<Test $changeStyle={hasExercises}>
								<StartWorkoutImage />
								<Link key="ExerciseName" href="/exercise">
									<FancyButton icon={<Plus />} text="add" />
								</Link>
							</Test>
						) : (
							<SetWorkoutName />
						)}

						{hasExercises && (
							<SlideButton
								key="SlideButton"
								onDragEnd={uploadWorkout}
								text="slide to end workout"
							/>
						)}
					</AnimatePresence>
				</WrapperContainer>
			</>
		)
	);
}

interface testProps {
	$changeStyle: boolean;
}

const Test = styled.div<testProps>`
	${(props) =>
		!props.$changeStyle
			? `
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			display: grid;
			place-items: center center;
			& > svg {
				position: absolute;
				border-radius: 100%;
				width: 250px;
				height: 250px;
				z-index: -1;
				opacity:.2
			}
		`
			: `
			& > svg {
				display:none
			}
		`}
`;
