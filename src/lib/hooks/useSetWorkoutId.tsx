import { v4 as uuidv4 } from "uuid";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
//Types

//Context
import { Workout } from "@typescriptTypes/WorkoutTypes";

export function useSetWorkoutId(
	workoutState: Workout,
	setWorkoutState: Dispatch<SetStateAction<Workout>>
) {
	const router = useRouter();

	const setWorkoutIdentity = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (workoutState.workout_id === null) {
			setWorkoutState((prevState) => ({
				...prevState,
				workout_id: uuidv4(),
				timestamp: Date.now(),
			}));
		}
		router.push("/workout");
	};

	return [setWorkoutIdentity];
}
