import React, { useState, ChangeEvent, MouseEvent, Dispatch } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

//Components
import Input from "@components/form-elements/Input";
import Times from "@components/icons/Times";
import Button from "@components/buttons/Button";
import Seperator from "@components/app/Seperator";

//Helpers
import { validateNumberValue } from "@helpers/validationHelpers";
import { genericFadeOutVariants } from "@constants/FramerVariants";

type Props = {
	exerciseSets: Dispatch<React.SetStateAction<any | null>>;
};

const AddExerciseSet = ({ exerciseSets }: Props) => {
	const [currentSet, setCurrentSet] = useState({
		weight: null,
		repetitions: null,
	});
	const weight = currentSet.weight;
	const reps = currentSet.repetitions;

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

	const handleAppendExerciseSet = (e: MouseEvent<HTMLButtonElement>) => {
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
					id: uuidv4(),
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
		<>
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
						onChange={handleChangeSetDataValue}
					/>

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
				<div>
					<Button
						isLoading={checkForValues}
						onClick={handleAppendExerciseSet}
						text={<Times isRotated fillColor="var(--gray900)" />}
					/>
				</div>
			</Container>
		</>
	);
};

const Container = styled(motion.form)`
	width: calc(100% + 4rem);
	padding: 0 2rem;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	position: relative;
	background: var(--gray800);
	z-index: 1;
	&:before,
	&:after {
		position: absolute;
		z-index: 8;
		width: 2rem;
		height: 2rem;
		bottom: -2rem;
		left: 0;
		content: "";
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' viewBox='0 0 65 65'%3E%3Cpath fill='%23111111' d='M0 65A65 65 0 0 1 65 0v-2H-2v67h2z'/%3E%3C/svg%3E");
	}
	&:after {
		left: unset;
		right: 0;
		transform: rotate(90deg);
	}
	& > div {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 4rem;
		&:last-of-type {
			transform: translateY(1rem);
			max-width: 70%;
			margin: auto;
			position: relative;
			z-index: 5;
		}
	}
	& button {
		position: relative;

		&:before,
		&:after {
			content: "";
			position: absolute;
			width: 150%;
			height: 150%;
			border-radius: 100%;
			background: var(--gray800);
			z-index: -1;
		}
		&:after {
			background: linear-gradient(
				90deg,
				rgba(255, 125, 42, 1) 0%,
				rgba(255, 42, 72, 1) 50%,
				rgba(255, 125, 42, 1) 100%
			);
			z-index: -2;
			transform: translateY(2px);
		}
	}
`;

export default AddExerciseSet;
