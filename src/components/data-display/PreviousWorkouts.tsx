import styled from "styled-components";

//Components
import NoData from "./NoData";

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
			{data ? (
				data.map(({ title, date, vol }, index) => (
					<WorkoutListItem key={index}>
						<h2>{title}</h2>
						<div>
							<span>
								<strong>Vol</strong> {vol}kg
							</span>
							<span>{date}</span>
						</div>
					</WorkoutListItem>
				))
			) : (
				<NoData type="message" message="Welcome aboard" smalltext="Time to start lifting!" />
			)}
		</Container>
	);
};

const WorkoutListItem = styled.div`
	height: 20%;
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	position: relative;
	flex: 1;

	border-bottom: 1px solid var(--gray700);
	scroll-snap-align: start;
	&:last-of-type {
		border: 0;
	}
	& span {
		font-size: 0.8rem;
	}
	& > div {
		color: white;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		& > *:first-child {
			color: var(--brand500);
		}
	}
`;
const Container = styled.div``;

export default PreviousWorkouts;
