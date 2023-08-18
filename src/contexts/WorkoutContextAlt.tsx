import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	SetStateAction,
	Dispatch,
	ReactNode,
} from "react";
import { Workout } from "@typescriptTypes/workoutTypes";

interface WorkoutContextValue {
	workoutState: Workout;
	setWorkoutState: Dispatch<SetStateAction<Workout>>;
}

const MyContext = createContext<WorkoutContextValue | undefined>(undefined);

type Props = {
	children: ReactNode;
};

const initialWorkoutState: Workout = {
	workout_id: null,
	user_id: null,
	name: null,
	timestamp: null,
	exercises: [],
};

function WorkoutProvider({ children }: Props) {
	const [workoutState, setWorkoutState] = useState(() => {
		if (typeof window !== "undefined") {
			const savedData = localStorage.getItem("current-workout");
			return savedData ? JSON.parse(savedData) : initialWorkoutState;
		} else {
			return initialWorkoutState;
		}
	});

	useEffect(() => {
		localStorage.setItem("current-workout", JSON.stringify(workoutState));
	}, [workoutState]);

	const contextValue = {
		workoutState,
		setWorkoutState,
	};

	return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

function useWorkoutContext() {
	const context = useContext(MyContext);
	if (context === undefined) {
		throw new Error("useWorkoutContext must be used within a WorkoutProvider");
	}
	return context;
}

export { WorkoutProvider, useWorkoutContext, initialWorkoutState };
