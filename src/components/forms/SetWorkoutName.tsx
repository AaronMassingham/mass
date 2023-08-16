import React, { useContext, useState, ChangeEvent, MouseEvent } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

//Context
import { useWorkoutContext } from "@contexts/WorkoutContextAlt";

//Types
import { Workout } from "@typescriptTypes/workoutTypes";

//Components
import Input from "@components/form-elements/Input";

const SetWorkoutName = () => {
	const router = useRouter();
	const { workoutState, setWorkoutState } = useWorkoutContext();

	const [workoutName, setWorkoutName] = useState("");

	const assignWorkoutName = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setWorkoutName(value.toLowerCase());
	};

	const dothething = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setWorkoutState((prevState: Workout) => ({
			...prevState,
			name: workoutName,
		}));
	};

	// const handleKeyDown = (event: any) => {
	// 	if (event.key === "Enter" && workoutState.name !== "") {
	// 		router.push("/exercise");
	// 	} else {
	// 	}
	// };
	return (
		<Container>
			<Input
				type="text"
				name="name"
				value={workoutName}
				onChange={assignWorkoutName}
				placeholder={workoutState.name ? workoutState.name : "Name your workout"}
			/>
			<button onClick={dothething} style={{ background: "red" }}>
				Set
			</button>
		</Container>
	);
};

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
`;

export default SetWorkoutName;
