import React, { useContext, ChangeEvent } from "react";

//Components
import Input from "@components/form-elements/Input";

//Context
import { WorkoutContext } from "@contexts/WorkoutContext";

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
		<div>
			<Input
				type="text"
				name="name"
				value={workoutState.name || ""}
				onChange={assignWorkoutName}
				placeholder="Name your workout"
			/>
		</div>
	);
};

export default SetWorkoutName;
