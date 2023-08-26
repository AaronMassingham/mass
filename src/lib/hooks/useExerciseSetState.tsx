import { useState } from "react";

type CurrentSet = {
	weight: number | null;
	repetitions: number | null;
};

type UpdateCurrentSet = (name: keyof CurrentSet, value: number | null) => void;

const useExerciseSetState = () => {
	const [currentSet, setCurrentSet] = useState<CurrentSet>({
		weight: null,
		repetitions: null,
	});

	const updateCurrentSet: UpdateCurrentSet = (name, value) => {
		setCurrentSet((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return { currentSet, updateCurrentSet };
};

export default useExerciseSetState;
