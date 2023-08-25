import Head from "next/head";
import { AnimatePresence } from "framer-motion";

//Components
import AddExerciseSet from "@components/forms/AddExerciseSet";
import SearchExercise from "@components/forms/SearchExercise";
import CompletedSetsList from "@components/data-display/CompletedSetsList";
import WrapperContainer from "@components/wrappers/WrapperContainer";
import Heading from "@components/app/Heading";
import SlideButton from "@components/buttons/SlideButton";
import AddCustomExercise from "@components/forms/AddCustomExercise";

//Constants
import { EXERCISELIST } from "@constants/Exercises";

//Hooks
import { useWorkoutHandlers } from "@hooks/useWorkoutHandlers";

export default function Exercise() {
	const { exerciseConstructor, setExerciseConstructor, volume, pushToWorkout, handleClearName } =
		useWorkoutHandlers();

	const hasVolume = volume !== 0 && (
		<>
			<strong>vol</strong> {volume} kg
		</>
	);
	const hasExerciseName = exerciseConstructor.name !== "";
	const hasExerciseSets = exerciseConstructor.sets.length !== 0;

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
