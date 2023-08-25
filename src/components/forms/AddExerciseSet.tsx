import React, { MouseEvent, Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

//Components
import Input from "@components/form-elements/Input";
import Times from "@components/icons/Times";
import Button from "@components/buttons/Button";
import Seperator from "@components/app/Seperator";

//Helpers
import { checkForValidValues } from "@helpers/validationHelpers";
import { genericFadeOutVariants } from "@constants/FramerVariants";

//hooks
import useExerciseSetState from "@hooks/useExerciseSetState";

//styled Components
import { DefaultPinnedContainerStyles as Container } from "@styles/Styles";

type Props = {
	exerciseSets: Dispatch<SetStateAction<any | null>>;
};

const AddExerciseSet = ({ exerciseSets }: Props) => {
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
		<Container layout {...genericFadeOutVariants}>
			<Seperator direction="up" />
			<div>
				<Input
					tag="kg"
					type="number"
					pattern="[0-9]*\.?[0-9]+"
					name="weight"
					value={weight || ""}
					placeholder="Weight"
					onChange={(e) => updateCurrentSet("weight", parseFloat(e.target.value) || null)}
				/>

				<Input
					tag="reps"
					type="number"
					pattern="[0-9]*\.?[0-9]+"
					name="repetitions"
					value={reps || ""}
					placeholder="Reps"
					onChange={(e) => updateCurrentSet("repetitions", parseFloat(e.target.value) || null)}
				/>
			</div>
			<div>
				<Button
					isLoading={checkForValues}
					onClick={handleAppendExerciseSet}
					text={<Times isRotated fillColor="var(--gray900)" />}
				/>
			</div>
		</Container>
	);
};

export default AddExerciseSet;
