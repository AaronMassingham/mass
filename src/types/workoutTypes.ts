export type Workout = {
	workout_id: null | string;
	user_id: null | string;
	name: null | string;
	timestamp: null | number;
	exercises: Exercise[];
};
export type Exercise = {
	exercise_id: null | string;
	name: string;
	volume: null | number;
	perceivedEffort: null | number;
	sets: Set[];
};
export type Set = {
	set_id: number;
	weight: number;
	repetitions: number;
};
