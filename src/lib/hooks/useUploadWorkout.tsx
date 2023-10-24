import { useRouter } from "next/router";
import { useState } from "react";

//Context
import { useWorkoutContext, initialWorkoutState } from "@contexts/WorkoutContext";

export function useSetWorkoutId(hasWorkoutName: boolean) {
	const router = useRouter();
	const { workoutState, setWorkoutState } = useWorkoutContext();

	const [completedExercises, setCompletedExercises] = useState([]);

	const uploadWorkout = () => {
		if (hasWorkoutName) {
			router.push("/");
			setCompletedExercises((prevState: any) => ({
				...prevState,
				workouts: [workoutState],
			}));

			setWorkoutState(initialWorkoutState);
		} else {
			console.log("no name given!");
		}
	};

	return [workoutState, uploadWorkout];
}
