import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

//Context
import { useWorkoutContext } from "@contexts/WorkoutContext";

//Types
import { Workout } from "@typescriptTypes/workoutTypes";

//Components
import Input from "@components/forms/elements/Input";
import Dialog from "@components/misc/Dialog";

//Styled Components
import { Container } from "@styles/styled-components/forms/SetWorkoutName";

const SetWorkoutName = () => {
	const router = useRouter();
	const { workoutState, setWorkoutState } = useWorkoutContext();

	const [workoutName, setWorkoutName] = useState("");

	const assignWorkoutName = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setWorkoutName(value.toLowerCase());
	};

	const handleSetName = () => {
		setWorkoutState((prevState: Workout) => ({
			...prevState,
			name: workoutName,
		}));
		router.push("/exercise");
	};
	return (
		<AnimatePresence>
			<Dialog
				showDialog={true}
				showCloseBtnCondition={true}
				hasOtherEvent={() => handleSetName()}
				text="Let's get started."
			>
				<Container>
					<div>
						<Input
							type="text"
							name="name"
							value={workoutName}
							onChange={assignWorkoutName}
							placeholder={workoutState.name ? workoutState.name : "Name your workout"}
						/>
					</div>
				</Container>
			</Dialog>
		</AnimatePresence>
	);
};

export default SetWorkoutName;
