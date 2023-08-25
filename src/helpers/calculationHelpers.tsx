import { Set } from "@typescriptTypes/workoutTypes";

export function calculateVolume(sets: Array<Set>) {
	return sets.reduce(
		(accumulator, { weight, repetitions }) => accumulator + weight * repetitions,
		0
	);
}
