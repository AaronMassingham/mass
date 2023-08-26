import React, { useState } from "react";
import { motion } from "framer-motion";

//Types
import { SearchExerciseType } from "@typescriptTypes/searchTypes";

//Helpers
import { filterNamesBySearchTerm } from "@helpers/filterHelpers";

//Constants
import { fadeInOutVariants } from "@constants/FramerVariants";

//Components
import Input from "@components/forms/elements/Input";

//Styled Components
import { Container } from "@styles/styled-components/forms/Search";

const SearchExercise = ({ setName, possibleNames }: SearchExerciseType) => {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredNames = filterNamesBySearchTerm(possibleNames, searchTerm);

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
		<Container {...fadeInOutVariants}>
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

export default SearchExercise;
