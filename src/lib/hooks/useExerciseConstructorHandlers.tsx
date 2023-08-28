// hooks/useWorkoutHandlers.js
import { useState } from "react";
import { Exercise, Workout } from "@typescriptTypes/WorkoutTypes";
import { calculateVolume } from "@helpers/calculationHelpers";
//Context
import { useWorkoutContext } from "@contexts/WorkoutContext";
import { useRouter } from "next/router";

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
		localStorage.setItem("current-workout", JSON.stringify(workoutState));
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
