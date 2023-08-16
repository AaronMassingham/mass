import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import Input from "@components/form-elements/Input";

//Constants
import { genericFadeOutVariants } from "@constants/FramerVariants";

type Props = {
	setName: React.Dispatch<React.SetStateAction<any | null>>;
	defaultName: string;
	possibleNames: string[];
};

const SearchExercise = ({ setName, possibleNames }: Props) => {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredNames = possibleNames.filter((name) =>
		name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleNameChange = (name: string) => {
		setTimeout(() => {
			setSearchTerm("");
		}, 300);
		setName((prevState: any) => ({
			...prevState,
			name,
		}));
	};

	console.log(searchTerm);

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
						<motion.li layout key={name} onClick={() => handleNameChange(name)}>
							{name}
						</motion.li>
					))}
				</motion.ul>
			</div>
		</Container>
	);
};

const Container = styled(motion.div)`
	height: -webkit-fill-available;
	& > div:last-of-type {
		position: relative;
		height: calc(100% - 7rem);
	}

	& ul {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: -webkit-fill-available;
		overflow-y: scroll;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
		& > li {
			height: 4rem;
			display: grid;
			place-items: center start;
			border-bottom: 1px solid var(--gray700);
			cursor: pointer;
		}
	}
`;

export default SearchExercise;
