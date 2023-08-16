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
						<span>{date}</span>
						<div>
							<span>{title}</span>
							<span>
								<strong>Vol</strong> {vol}kg
							</span>
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
	& > span {
		color: var(--gray700);
	}
	& > div {
		color: white;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;
const Container = styled.div``;

export default PreviousWorkouts;
