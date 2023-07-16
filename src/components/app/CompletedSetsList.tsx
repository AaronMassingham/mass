import styled from "styled-components";

//Components
import NoData from "@components/NoData";
import CompletedSetItem from "@components/app/CompletedSetItem";
import Button from "@components/Button";
import Times from "@components/icons/Times";

import { Exercise, Set } from "@typescriptTypes/workoutTypes";

type Props = {
	data: Set[];
	exerciseSets: React.Dispatch<React.SetStateAction<Exercise>>;
};

const CompletedSetsList = ({ data, exerciseSets }: Props) => {
	const volume = data.reduce((accumulator, set) => accumulator + set.weight * set.repetitions, 0);

	const handleSetDelete = (setId: number) => {
		exerciseSets((prevState) => ({
			...prevState,
			sets: prevState.sets.filter((set) => set.id !== setId),
		}));
	};

	return (
		<>
			<Container>
				<div>
					{data.length !== 0 ? (
						data.map((set, index) => (
							<CompletedSetItem
								key={set.id}
								setId={set.id}
								weight={set.weight}
								repetitions={set.repetitions}
								setNumber={index + 1}
							>
								<Button
									onClick={() => handleSetDelete(set.id)}
									text={<Times fillColor="var(--primaryDark)" />}
								/>
							</CompletedSetItem>
						))
					) : (
						<NoData message="Your sets will appear here" />
					)}
				</div>
				<div>
					{volume !== 0 && (
						<>
							<strong>TVol</strong> {volume}kg
						</>
					)}
				</div>
			</Container>
		</>
	);
};

const Container = styled.div`
	padding: 2rem 0 var(--padding) 0;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	& > div:first-child {
		display: grid;
		gap: 1rem;
	}
	& > div:last-child {
		margin-left: auto;
		padding-right: 6rem;
	}
	& strong {
		color: var(--primaryColor);
	}
`;

export default CompletedSetsList;
