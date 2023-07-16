export type Workout = {
	workoutId: null | string;
	name: null | string;
	timestamp: null | number;
	exercises: Exercise[];
};
export type Exercise = {
	name: string;
	exerciseId: null | string;
	volume: null | number;
	perceivedEffort: null | number;
	sets: Set[];
};
export type Set = {
	id: number;
	weight: number;
	repetitions: number;
};
