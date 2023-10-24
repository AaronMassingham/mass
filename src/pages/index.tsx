import Head from "next/head";

//Components
import FancyButton from "@components/buttons/Fancy";
import Heading from "@components/header/Title";
import Muscle from "@components/icons/Muscle";
import PreviousWorkouts from "@components/data-display/PreviousWorkouts";
import ScrollableContainer from "@components/wrappers/ScrollContainer";
import WrapperContainer from "@components/wrappers/Wrapper";

//Contexts
import { useWorkoutContext } from "@contexts/WorkoutContext";

//Constants
import { PREVWORKOUTS } from "@constants/PreviousWorkoutsDummy";

//Hooks
import { useSetWorkoutId } from "@hooks/useSetWorkoutId";

//Types
import { Hydrated } from "@typescriptTypes/MiscTypes";

export default function Home({ isHydrated }: Hydrated) {
	const { workoutState, setWorkoutState } = useWorkoutContext();

	const [setWorkoutIdentity] = useSetWorkoutId(workoutState, setWorkoutState);
	const checkWorkoutId = workoutState.workout_id == null ? "start" : "continue";

	return (
		isHydrated && (
			<>
				<Head>
					<title>MASS WORKOUT TRACKER</title>
				</Head>

				<WrapperContainer variant="main">
					<Heading variant="default" text="Recent Workouts" />
					<ScrollableContainer>
						<PreviousWorkouts data={PREVWORKOUTS} />
					</ScrollableContainer>
				</WrapperContainer>

				<WrapperContainer variant="pinned">
					<FancyButton icon={<Muscle />} text={checkWorkoutId} onClick={setWorkoutIdentity} />
				</WrapperContainer>
			</>
		)
	);
}
