import { useState } from "react";
import { useRouter } from "next/router";
import { Exercise, Workout } from "@typescriptTypes/WorkoutTypes";
import { calculateVolume } from "@helpers/calculationHelpers";

//Context
import { useWorkoutContext } from "@contexts/WorkoutContext";

export function useExerciseConstructorHandlers() {
	const router = useRouter();
	const { workoutState, setWorkoutState } = useWorkoutContext();
	const [exerciseConstructor, setExerciseConstructor] = useState<Exercise>({
		name: "",
		exercise_id: "",
		volume: null,
		perceivedEffort: null,
		sets: [],
	});

	const volume = calculateVolume(exerciseConstructor.sets);

	const appendExerciseToWorkout = () => {
		setWorkoutState((prevState: Workout) => ({
			...prevState,
			exercises: [
				...prevState.exercises,
				{
					name: exerciseConstructor.name,
					exercise_id: exerciseConstructor.name,
					perceivedEffort: null,
					sets: exerciseConstructor.sets,
					volume: volume,
				},
			],
		}));
		router.push("/workout");
		try {
			localStorage.setItem("current-workout", JSON.stringify(workoutState));
			console.log(localStorage);
		} catch (error) {
			console.error("Error saving workout to local storage:", error);
		}
	};

	const clearExerciseName = () => {
		setExerciseConstructor((prevState: Exercise) => ({
			...prevState,
			name: "",
		}));
		console.log("clicked");
	};

	return {
		exerciseConstructor,
		volume,
		clearExerciseName,
		setExerciseConstructor,
		appendExerciseToWorkout,
	};
}
