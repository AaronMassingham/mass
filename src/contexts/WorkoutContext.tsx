import React, { createContext, useState } from "react";
import useConfirmationAlert from "@hooks/useConfirmationAlert";

import { Workout } from "@typescriptTypes/workoutTypes";

interface WorkoutContextValue {
	workoutState: Workout;
	setWorkoutState: React.Dispatch<React.SetStateAction<Workout>>;
}

const initialWorkoutState: Workout = {
	workoutId: null,
	name: "",
	timestamp: null,
	exercises: [],
};

const WorkoutContext = createContext<WorkoutContextValue>({
	workoutState: initialWorkoutState,
	setWorkoutState: () => {},
});

const WorkoutProvider = ({ children }: Props) => {
	const [workoutState, setWorkoutState] = useState<Workout>(initialWorkoutState);

	const checkForData = workoutState.workoutId !== null;
	useConfirmationAlert({ hasDataInGlobalState: checkForData });

	console.log(workoutState);

	return (
		<WorkoutContext.Provider value={{ workoutState, setWorkoutState }}>
			{children}
		</WorkoutContext.Provider>
	);
};

type Props = {
	children: React.ReactNode;
};

export { WorkoutContext, WorkoutProvider, initialWorkoutState };
