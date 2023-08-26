import React, { MouseEvent, Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

//Components
import Input from "@components/forms/elements/Input";
import Times from "@components/icons/Times";
import DefaultButton from "@components/buttons/Default";
import Seperator from "@components/misc/Seperator";

//Constants
import { fadeInOutVariants } from "@constants/FramerVariants";
import { REPVALUES, WEIGHTVALUES } from "@constants/InputValues";

//Helpers
import { checkForValidValues } from "@helpers/validationHelpers";

//hooks
import useExerciseSetState from "@hooks/useExerciseSetState";

//styled Components
import { Container } from "@styles/styled-components/PinnedContainer";

//Types
import { AddExerciseSetType } from "@typescriptTypes/workoutTypes";

const AddExerciseSet = ({ exerciseSets }: AddExerciseSetType) => {
	const { currentSet, updateCurrentSet } = useExerciseSetState();

	const weight = currentSet.weight;
	const reps = currentSet.repetitions;

	const checkForValues = checkForValidValues(weight, reps);

	const handleAppendExerciseSet = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (checkForValues) {
			alert("Weight and repetitions need a value between 1 and 999.");
			return;
		}

		exerciseSets((prevState: any) => ({
			...prevState,
			sets: [
				...prevState.sets,
				{
					set_id: uuidv4(),
					weight: weight,
					repetitions: reps,
				},
			],
		}));
		updateCurrentSet("weight", null);
		updateCurrentSet("repetitions", null);
	};

	return (
		<Container layout {...fadeInOutVariants}>
			<Seperator direction="up" />
			<div>
				<Input
					{...WEIGHTVALUES}
					value={weight || ""}
					onChange={(e) => updateCurrentSet("weight", parseFloat(e.target.value) || null)}
				/>
				<Input
					{...REPVALUES}
					value={reps || ""}
					onChange={(e) => updateCurrentSet("repetitions", parseFloat(e.target.value) || null)}
				/>
			</div>
			<div>
				<DefaultButton
					isLoading={checkForValues}
					onClick={handleAppendExerciseSet}
					text={<Times isRotated fillColor="var(--gray900)" />}
				/>
			</div>
		</Container>
	);
};

export default AddExerciseSet;
