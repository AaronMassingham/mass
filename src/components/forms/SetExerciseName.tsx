import React, { ChangeEvent } from "react";

//Components
import Input from "@components/form-elements/Input";

type Props = {
	setName: React.Dispatch<React.SetStateAction<any | null>>;
	defaultName: string;
};

const SetExerciseName = ({ setName, defaultName }: Props) => {
	const assignExerciseName = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setName((prevState: any) => ({
			...prevState,
			[name]: value,
		}));
	};
	return (
		<div>
			<Input
				type="text"
				name="name"
				value={defaultName || ""}
				onChange={assignExerciseName}
				placeholder="Select Exercise..."
			/>
		</div>
	);
};

export default SetExerciseName;
