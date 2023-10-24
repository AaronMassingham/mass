import Head from "next/head";
import { AnimatePresence, LayoutGroup } from "framer-motion";

//Components
import AddExerciseSet from "@components/forms/AddExerciseSet";
import SearchExercise from "@components/forms/SearchExercise";
import AddCustomExercise from "@components/forms/AddCustomExercise";
import CompletedSetsList from "@components/data-display/CompletedSetsList";
import WrapperContainer from "@components/wrappers/Wrapper";
import Heading from "@components/header/Title";
import SlideButton from "@components/buttons/Slide";

//Types
import { Hydrated } from "@typescriptTypes/MiscTypes";

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
					<LayoutGroup>
						<AnimatePresence mode="wait">
							{hasExerciseName ? (
								<AddExerciseSet key="add-sets" exerciseSets={setExerciseConstructor} />
							) : (
								<AddCustomExercise key="add-exercise-name" />
							)}
						</AnimatePresence>
						<AnimatePresence>
							{hasExerciseSets && (
								<SlideButton
									key="slide-button"
									onDragEnd={appendExerciseToWorkout}
									text="slide to finish"
								/>
							)}
						</AnimatePresence>
					</LayoutGroup>
				</WrapperContainer>
			</>
		)
	);
}
