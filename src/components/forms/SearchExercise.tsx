import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import Input from "@components/form-elements/Input";

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
		setSearchTerm("");
		setName((prevState: any) => ({
			...prevState,
			name,
		}));
	};
	return (
		<Container>
			<Input
				type="text"
				placeholder="Search exercise names"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<motion.ul layout="position">
				{filteredNames.map((name) => (
					<motion.li
						layout="position"
						key={name}
						onClick={() => handleNameChange(name)}
						style={{ cursor: "pointer" }}
					>
						{name}
					</motion.li>
				))}
			</motion.ul>
		</Container>
	);
};

const Container = styled.div`
	& > div {
		margin: 3rem 0 0 0;
	}
	& ul {
		max-height: 300px;
		height: 100%;
		overflow: scroll;
		padding: 0 0 var(--padding) 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
		& > li {
			padding: calc(var(--padding) * 1.5) 0;
			border-bottom: 1px solid var(--secondaryLight);
		}
	}
`;

export default SearchExercise;
