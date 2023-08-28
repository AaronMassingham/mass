export type Set = {
	set_id: number;
	weight: number;
	repetitions: number;
};

export type Exercise = {
	exercise_id: null | string;
	name: string;
	volume: null | number;
	perceivedEffort: null | number;
	sets: Set[];
};
export type Workout = {
	workout_id: null | string;
	user_id: null | string;
	name: null | string;
	timestamp: null | number;
	exercises: Exercise[];
};

export type ExerciseListItemType = {
	completedExercises: Exercise;
	listRef: React.RefObject<HTMLDivElement>;
};

export type CompletedSetsListType = {
	data: Set[];
	exerciseSets: React.Dispatch<React.SetStateAction<Exercise>>;
};

export type CompletedSetsListItemType = Set & {
	setNumber: number;
	children: React.ReactNode;
};

export type PreviousWorkoutItemType = {
	title: string;
	date: string;
	vol: number;
};

export type PreviousWorkoutsType = {
	data: PreviousWorkoutItemType[];
};

export type AddExerciseSetType = {
	exerciseSets: React.Dispatch<React.SetStateAction<Exercise>>;
};
