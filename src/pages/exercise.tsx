import Head from "next/head";
import { AnimatePresence } from "framer-motion";

//Components
import AddExerciseSet from "@components/forms/AddExerciseSet";
import SearchExercise from "@components/forms/SearchExercise";
import CompletedSetsList from "@components/data-display/CompletedSetsList";
import WrapperContainer from "@components/wrappers/WrapperContainer";
import Heading from "@components/header/Title";
import SlideButton from "@components/buttons/Slide";
import AddCustomExercise from "@components/forms/AddCustomExercise";

//Types
import { Hydrated } from "@typescriptTypes/MMiscTypes";

//Constants
import { EXERCISELIST } from "@constants/Exercises";

//Hooks
import { useExerciseConstructorHandlers } from "@hooks/useExerciseConstructorHandlers";

export default function Exercise({ isHydrated }: Hydrated) {
	const {
		volume,
		exerciseConstructor,
		setExerciseConstructor,
		appendExerciseToWorkout,
		clearExerciseName,
	} = useExerciseConstructorHandlers();

	const hasVolume = volume !== 0 && (
		<>
			<strong>vol</strong> {volume} kg
		</>
	);
	const hasExerciseName = exerciseConstructor.name !== "";
	const hasExerciseSets = exerciseConstructor.sets.length !== 0;

	return (
		isHydrated && (
			<>
				<Head>
					<title>MASS WORKOUT TRACKER</title>
				</Head>
				<WrapperContainer variant="main">
					<Heading
						variant="plain"
						onClick={clearExerciseName}
						text={hasExerciseName ? exerciseConstructor.name : "select exercise"}
						secondaryText={hasVolume}
					/>

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
				</WrapperContainer>

				<WrapperContainer variant="pinned">
					<AnimatePresence>
						{hasExerciseName ? (
							<AddExerciseSet key="add-sets" exerciseSets={setExerciseConstructor} />
						) : (
							<AddCustomExercise key="add-exercise-name" />
						)}
						{hasExerciseSets && (
							<SlideButton
								key="slide-button"
								onDragEnd={appendExerciseToWorkout}
								text="slide to finish"
							/>
						)}
					</AnimatePresence>
				</WrapperContainer>
			</>
		)
	);
}
