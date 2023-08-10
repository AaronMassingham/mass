import React, { useContext, ChangeEvent } from "react";
import styled from "styled-components";

//Context
import { WorkoutContext } from "@contexts/WorkoutContext";

//Components
import Input from "@components/form-elements/Input";

const SetWorkoutName = () => {
	const { workoutState, setWorkoutState } = useContext(WorkoutContext);

	const assignWorkoutName = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setWorkoutState((prevState) => ({
			...prevState,
			[name]: value.toLowerCase(),
		}));
	};
	return (
		<Container>
			<Input
				type="text"
				name="name"
				value={workoutState.name || ""}
				onChange={assignWorkoutName}
				placeholder="Name your workout"
			/>
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
