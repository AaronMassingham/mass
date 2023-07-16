import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

//Components
import Input from "@components/form-elements/Input";
import Times from "@components/icons/Times";
import Button from "@components/Button";

//Helpers
import { validateNumberValue } from "@helpers/validationHelpers";

type Props = {
	exerciseSetLength: number;
	exerciseSets: React.Dispatch<React.SetStateAction<any | null>>;
};

const AddExerciseSet = ({ exerciseSetLength, exerciseSets }: Props) => {
	const [currentSet, setCurrentSet] = useState({
		weight: null,
		repetitions: null,
	});
	const weight = currentSet.weight;
	const reps = currentSet.repetitions;
	const exerciseCount = exerciseSetLength + 1;

	const checkForValues =
		validateNumberValue(weight, 1, 999) ||
		validateNumberValue(reps, 1, 999) ||
		weight === null ||
		reps === null;

	const handleChangeSetDataValue = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setCurrentSet((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleAppendExerciseSet = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (checkForValues) {
			alert("weight and repetitions need a value between 1 and 999.");
			return;
		}

		exerciseSets((prevState: any) => ({
			...prevState,
			sets: [
				...prevState.sets,
				{
					id: exerciseCount,
					weight: weight,
					repetitions: reps,
				},
			],
		}));
		setCurrentSet((prevState) => ({
			...prevState,
			weight: null,
			repetitions: null,
		}));
	};

	return (
		<Container>
			<div>
				<Input
					tag="kg"
					type="number"
					pattern="[0-9]*\.?[0-9]+"
					name="weight"
					value={weight || ""}
					placeholder="Weight"
					onChange={handleChangeSetDataValue}
				/>
				<Times />
				<Input
					tag="reps"
					type="number"
					pattern="[0-9]*\.?[0-9]+"
					name="repetitions"
					value={reps || ""}
					placeholder="Reps"
					onChange={handleChangeSetDataValue}
				/>
			</div>
			<Button
				isLoading={checkForValues}
				onClick={handleAppendExerciseSet}
				text={<Times isRotated fillColor="var(--primaryDark)" />}
			/>
		</Container>
	);
};

const Container = styled.form`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	border-bottom: 1px solid var(--primaryColor);
	border-top: 1px solid var(--primaryColor);
	padding: var(--padding) 0;
	margin-bottom: var(--padding);

	& > div {
		width: calc(100% - 5rem);
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
`;

export default AddExerciseSet;
