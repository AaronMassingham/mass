import styled from "styled-components";

type Props = {
	data: Array<{
		title: string;
		date: string;
		vol: number;
	}>;
};

const PreviousWorkouts = ({ data }: Props) => {
	return (
		<Container>
			{data.map(({ title, date, vol }, index) => (
				<Workout key={index}>
					<span>{date}</span>
					<div>
						<span>{title}</span>
						<span>
							<strong>Vol</strong> {vol}kg
						</span>
					</div>
				</Workout>
			))}
		</Container>
	);
};

const Workout = styled.div`
	display: grid;
	gap: 0.5rem;
	padding: calc(var(--padding) * 1.5) 0;
	border-bottom: 1px solid var(--secondaryLight);
	&:last-of-type {
		border: 0;
	}
	& > span {
		font-size: 0.8rem;
		color: var(--secondaryLight);
	}
	& > div {
		color: white;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;
const Container = styled.div`
	display: grid;
	margin-bottom: 2.5rem;
`;

export default PreviousWorkouts;
