//Styled Components
import { Container } from "@styles/styled-components/data-display/PreviousWorkoutListItem";

const PreviousWorkoutListItem = ({ title, date, vol }: Props) => {
	return (
		<Container>
			<h2>{title}</h2>
			<div>
				<span>
					<strong>Vol</strong> {vol}kg
				</span>
				<span>{date}</span>
			</div>
		</Container>
	);
};

type Props = {
	title: string;
	date: string;
	vol: number;
};

export default PreviousWorkoutListItem;
