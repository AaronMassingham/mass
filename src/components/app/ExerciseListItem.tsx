import styled from "styled-components";

//Components
import Times from "@components/icons/Times";

//Types
import { Exercise } from "@typescriptTypes/workoutTypes";

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
			<div>
				<div>{name}</div>
				<div>
					<strong>Vol</strong> {volume}kg
				</div>
			</div>
			<OverflowList>
				<div>
					{sets.map((set) => (
						<div key={set.id}>
							<div>{set.id}</div>
							{set.weight} <Times /> {set.repetitions}
						</div>
					))}
				</div>
			</OverflowList>
		</Container>
	);
};

const OverflowList = styled.div`
	position: relative;
	width: 100%;
	&:before {
		position: absolute;
		z-index: 3;
		right: 0;
		top: 0;
		height: 100%;
		width: 4rem;
		content: "";
		background: linear-gradient(
			90deg,
			rgba(var(--primaryDarkGrad), 0) 0%,
			rgba(var(--primaryDarkGrad), 1) 75%
		);
	}
	& > div {
		width: 100%;
		display: flex;
		flex-wrap: no-wrap;
		flex-direction: row;
		gap: 1rem;
		overflow: scroll;
		padding-right: 2rem;
		&::-webkit-scrollbar {
			display: none;
		}
		& > div {
			flex: none;
			display: flex;
			font-size: 0.8rem;
			border: 1px solid var(--secondaryLight);
			border-radius: var(--radius);
			padding: 0.75rem var(--padding) 0.75rem 1.5rem;
			position: relative;
			& svg {
				width: 0.5rem;
				opacity: 0.4;
			}
			& > div:first-child {
				position: absolute;
				top: -1px;
				left: -1px;
				border-radius: var(--radius) 0;
				font-size: 0.6rem;
				background-color: var(--secondaryLight);
				padding: 0.1rem 0.3rem;
				color: var(--primaryDark);
			}
		}
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
	& > div:first-child {
		width: 100%;
		display: flex;
		justify-content: space-between;
		color: var(--primaryColor);
		& > div:last-child {
			font-size: 0.7rem;
			color: var(--secondaryLight);
		}
	}

	&:last-child {
		padding: var(--padding) 0 0 0;
	}
	&:not(:last-child) {
		border-bottom: 1px solid var(--secondaryDark);
	}
	&:first-child {
		padding: 0 0 var(--padding) 0;
	}
`;

export default ExerciseListItem;
