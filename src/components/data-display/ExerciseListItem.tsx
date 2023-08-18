import styled from "styled-components";

//Types
import { Exercise } from "@typescriptTypes/workoutTypes";

//Components
import Times from "@components/icons/Times";

type Props = {
	completedExercises: Exercise;
	listRef: any;
};

const ExerciseListItem = ({ completedExercises, listRef }: Props) => {
	const { name, sets } = completedExercises;

	const volume = completedExercises.sets.reduce(
		(accumulator, { weight, repetitions }) => accumulator + weight! * repetitions!,
		0
	);
	return (
		<Container ref={listRef}>
			<Details>
				<div>{name}</div>
				<div>
					<strong>Vol</strong> {volume}kg
				</div>
			</Details>
			<OverflowList>
				<div>
					{sets.map((set, index) => (
						<ListItem key={set.set_id}>
							<div>{index + 1}</div>
							{set.weight} <Times /> {set.repetitions}
						</ListItem>
					))}
				</div>
			</OverflowList>
		</Container>
	);
};

const Details = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	& > div:last-child {
		font-size: 0.7rem;
		color: var(--brand500);
	}
`;
const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	gap: 0.75rem;
	padding: var(--padding) 0;
	justify-content: space-between;
`;

const ListItem = styled.div`
	min-width: 115px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.8rem;
	padding: 0.5rem var(--padding) 0.5rem 1rem;
	border-bottom: 1px solid var(--gray700);
	border-radius: var(--radius);
	& svg {
		width: 0.5rem;
		opacity: 0.4;
	}
	& > div:first-child {
		position: absolute;
		bottom: -2px;
		left: 2px;
		transform: translateX(-0.5rem);
		width: 1rem;
		text-align: center;
		font-size: 0.6rem;
		background-color: var(--gray900);
		color: var(--brand500);
	}
`;
const OverflowList = styled.div`
	position: relative;
	width: 100%;
	overflow: hidden;
	&:before {
		position: absolute;
		z-index: 3;
		right: 0;
		top: 0;
		height: 100%;
		width: 1rem;
		content: "";
		background: linear-gradient(
			90deg,
			rgba(var(--gray900Grad), 0) 0%,
			rgba(var(--gray900Grad), 1) 75%
		);
	}
	& > div {
		width: 100%;
		display: flex;
		flex-wrap: no-wrap;
		flex-direction: row;
		gap: 2rem;
		padding-right: 2rem;
		overflow: scroll;
		overflow-y: clip;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

export default ExerciseListItem;
