import React, { useState, MouseEvent } from "react";
import { AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

//Components
import Times from "@components/icons/Times";
import Button from "@components/buttons/Button";
import Seperator from "@components/app/Seperator";
import Dialog from "@components/Dialog";

//Constants
import { genericFadeOutVariants } from "@constants/FramerVariants";

//styled Components
import { DefaultPinnedContainerStyles as Container } from "@styles/Styles";

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
				<div>Add New</div>

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

export default AddCustomExercise;
