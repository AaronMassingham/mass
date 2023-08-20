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
import { Exercise } from "@typescriptTypes/workoutTypes";

//Constants
import { EXERCISELIST } from "@constants/Exercises";
import AddCustomExercise from "@components/forms/AddCustomExercise";

export default function Search() {
	const router = useRouter();
	const { workoutState, setWorkoutState } = useWorkoutContext();

	const [exerciseConstructor, setExerciseConstructor] = useState<Exercise>({
		name: "",
		exercise_id: "",
		volume: null,
		perceivedEffort: null,
		sets: [],
	});

	return (
		<>
			<Head>
				<title>MASS WORKOUT TRACKER</title>
			</Head>
			<WrapperContainer variant="overflow">
				<Heading variant="plain" text="Select Exercise" secondaryText="Or add your own" />
				<SearchExercise
					key="search"
					possibleNames={EXERCISELIST}
					setName={setExerciseConstructor}
					defaultName={exerciseConstructor.name}
				/>
			</WrapperContainer>

			<WrapperContainer variant="pinned">
				<AddCustomExercise key="testt-too" />
			</WrapperContainer>
		</>
	);
}
