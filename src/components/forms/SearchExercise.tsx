import React, { useState } from "react";
import { motion } from "framer-motion";

//Components
import Input from "@components/form-elements/Input";

//Constants
import { genericFadeOutVariants } from "@constants/FramerVariants";

//Styled Components
import { Container } from "@styles/styled-components/forms/Search";

const SearchExercise = ({ setName, possibleNames }: Props) => {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredNames = possibleNames.filter((name) =>
		name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleSetExerciseName = (name: string) => {
		setTimeout(() => {
			setSearchTerm("");
		}, 300);
		setName((prevState: any) => ({
			...prevState,
			name,
		}));
	};

	return (
		<Container {...genericFadeOutVariants}>
			<Input
				type="text"
				placeholder="Type to filter"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<div>
				<motion.ul>
					{filteredNames.map((name) => (
						<motion.li layout key={name} onClick={() => handleSetExerciseName(name)}>
							{name}
						</motion.li>
					))}
				</motion.ul>
			</div>
		</Container>
	);
};

type Props = {
	setName: React.Dispatch<React.SetStateAction<any | null>>;
	defaultName: string;
	possibleNames: string[];
};

export default SearchExercise;
