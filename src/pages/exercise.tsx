import React, { useState, MouseEvent } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

//Context
import { useWorkoutContext } from "@contexts/WorkoutContextAlt";

//Components
import AddExerciseSet from "@components/forms/AddExerciseSet";
import SearchExercise from "@components/forms/SearchExercise";
import CompletedSetsList from "@components/data-display/CompletedSetsList";
import WrapperContainer from "@components/wrappers/WrapperContainer";
import Heading from "@components/app/Heading";
import SlideButton from "@components/buttons/SlideButton";

//Types
import { Exercise, Workout } from "@typescriptTypes/workoutTypes";

//Constants
import { EXERCISELIST } from "@constants/Exercises";
import AddCustomExercise from "@components/forms/AddCustomExercise";
import { Hydrated } from "@typescriptTypes/miscTypes";

export default function Exercise() {
	const router = useRouter();
	const { workoutState, setWorkoutState } = useWorkoutContext();

	const [exerciseConstructor, setExerciseConstructor] = useState<Exercise>({
		name: "",
		exercise_id: "",
		volume: null,
		perceivedEffort: null,
		sets: [],
	});

	const calculateVolume = exerciseConstructor.sets.reduce(
		(accumulator, { weight, repetitions }) => accumulator + weight * repetitions,
		0
	);

	const pushToWorkout = () => {
		setWorkoutState((prevState: Workout) => ({
			...prevState,
			exercises: [
				...prevState.exercises,
				{
					name: exerciseConstructor.name,
					exercise_id: exerciseConstructor.name,
					perceivedEffort: null,
					sets: exerciseConstructor.sets,
					volume: calculateVolume,
				},
			],
		}));
		router.push("/workout");
		localStorage.setItem("current-workout", JSON.stringify(workoutState));
	};

	const handleClearName = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setExerciseConstructor((prevState: Exercise) => ({
			...prevState,
			name: "",
		}));
	};

	const hasExerciseName = exerciseConstructor.name !== "";
	const hasExerciseSets = exerciseConstructor.sets.length !== 0;
	const hasVolume = calculateVolume !== 0 && (
		<>
			<strong>vol</strong> {calculateVolume.toString()} kg
		</>
	);

	return (
		<>
			<Head>
				<title>MASS WORKOUT TRACKER</title>
			</Head>
			<WrapperContainer variant="overflow">
				<Heading
					variant="plain"
					onClick={handleClearName}
					text={hasExerciseName ? exerciseConstructor.name : "select exercise"}
					secondaryText={hasVolume}
				/>
				<AnimatePresence mode="wait">
					{hasExerciseName ? (
						<CompletedSetsList
							key="sets"
							data={exerciseConstructor.sets}
							exerciseSets={setExerciseConstructor}
						/>
					) : (
						<SearchExercise
							key="search"
							possibleNames={EXERCISELIST}
							setName={setExerciseConstructor}
							defaultName={exerciseConstructor.name}
						/>
					)}
				</AnimatePresence>
			</WrapperContainer>

			<WrapperContainer variant="pinned">
				<AnimatePresence mode="wait">
					{hasExerciseName ? (
						<AddExerciseSet key="add-sets" exerciseSets={setExerciseConstructor} />
					) : (
						<AddCustomExercise key="testt-too" />
					)}
					{hasExerciseSets && (
						<SlideButton key="slide-button" onDragEnd={pushToWorkout} text="slide to finish" />
					)}
				</AnimatePresence>
			</WrapperContainer>
		</>
	);
}
