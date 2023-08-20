import React, { useState, ChangeEvent } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useRouter } from "next/router";

//Context
import { useWorkoutContext } from "@contexts/WorkoutContextAlt";

//Types
import { Workout } from "@typescriptTypes/workoutTypes";

//Components
import Input from "@components/form-elements/Input";
import Dialog from "@components/Dialog";

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
		<>
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
		</>
	);
};

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	position: relative;
	& > div {
		position: relative;
		width: 100%;
		text-align: center;
		&:last-of-type {
			padding-top: 1rem;
			display: grid;
			place-items: center;
		}
	}
`;

export default SetWorkoutName;
