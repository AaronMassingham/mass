import { Set } from "@typescriptTypes/WWorkoutTypes";

export function calculateVolume(sets: Array<Set>) {
	return sets.reduce(
		(accumulator, { weight, repetitions }) => accumulator + weight * repetitions,
		0
	);
}
