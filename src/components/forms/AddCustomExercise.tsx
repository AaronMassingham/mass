import React, { useState, ChangeEvent, MouseEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

//Components
import Input from "@components/form-elements/Input";
import Times from "@components/icons/Times";
import Button from "@components/buttons/Button";
import Seperator from "@components/app/Seperator";
import Dialog from "@components/Dialog";

//Constants
import { MUSCLE_GROUPS } from "@constants/MuscleGroups";
import { genericFadeOutVariants } from "@constants/FramerVariants";

type Props = {
	setNewExercise: Dispatch<SetStateAction<any | null>>;
};

const AddCustomExercise = () => {
	const [dialogs, setDialogs] = useState(false);
	const [newExercise, setNewExercise] = useState({
		name: null,
		exercise_id: null,
		user_id: null,
		muscle_group: null,
	});

	const handleAddNewExercise = () => {
		setNewExercise((prevState: any) => ({
			...prevState,
			exercise_id: uuidv4(),
			user_id: null,
			name: "test",
			muscle_group: null,
		}));
		setDialogs(false);
	};

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setDialogs(true);
	};
	console.log(dialogs);

	return (
		<>
			<Container layout {...genericFadeOutVariants}>
				<Seperator direction="up" />
				<div>
					Exercise not listed?
					<br />
					<small>Add your own!</small>
				</div>

				<Button onClick={handleClick} text={<Times isRotated fillColor="var(--gray900)" />} />
			</Container>
			<AnimatePresence>
				{dialogs && (
					<Dialog
						showDialog={true}
						showCloseBtnCondition={true}
						hasOtherEvent={() => handleAddNewExercise()}
						text="Add a custom exercise"
					>
						Test
					</Dialog>
				)}
			</AnimatePresence>
		</>
	);
};

const Container = styled(motion.form)`
	position: relative;
	z-index: 1;
	height: 100%;
	width: calc(100% + 4rem);
	padding: 0 2rem;
	margin-bottom: -2rem;
	display: flex;

	flex-direction: column;
	align-items: center;
	gap: 2rem;
	background: var(--gray800);
	&:before,
	&:after {
		position: absolute;
		z-index: 8;
		width: 2rem;
		height: 2rem;
		bottom: 2rem;
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
		text-align: center;
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

export default AddCustomExercise;
