//Components
import NoData from "./NoData";
import PreviousWorkoutListItem from "./PreviousWorkoutListItem";

//Types
import { PreviousWorkoutsType } from "@typescriptTypes/WWorkoutTypes";

const PreviousWorkouts = ({ data }: PreviousWorkoutsType) => {
	return (
		<div>
			{data ? (
				data?.map(({ title, date, vol }, index) => (
					<PreviousWorkoutListItem key={index} title={title} date={date} vol={vol} />
				))
			) : (
				<NoData type="message" message="Welcome aboard" smalltext="Time to start lifting!" />
			)}
		</div>
	);
};

export default PreviousWorkouts;
