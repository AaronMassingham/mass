import styled from "styled-components";

//Types
import { Exercise, Set } from "@typescriptTypes/workoutTypes";

//Components
import NoData from "@components/NoData";
import CompletedSetItem from "@components/app/CompletedSetItem";
import Trash from "@components/icons/Trash";

type Props = {
	data: Set[];
	exerciseSets: React.Dispatch<React.SetStateAction<Exercise>>;
};

const CompletedSetsList = ({ data, exerciseSets }: Props) => {
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
								<button onClick={() => handleSetDelete(set.id)}>
									<Trash />
								</button>
							</CompletedSetItem>
						))
					) : (
						<NoData message="Your sets will appear here" />
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
		gap: 2rem;
	}
	& strong {
		color: var(--primaryColor);
	}
	& button {
		width: 1rem;
	}
`;

export default CompletedSetsList;
