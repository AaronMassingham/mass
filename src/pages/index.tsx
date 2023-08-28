import Head from "next/head";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

//Contexts
import { useWorkoutContext } from "@contexts/WorkoutContext";

//Constants
import { PREVWORKOUTS } from "@constants/PreviousWorkoutsDummy";

//Types
import { Hydrated } from "@typescriptTypes/MMiscTypes";

//Components
import PreviousWorkouts from "@components/data-display/PreviousWorkouts";
import WrapperContainer from "@components/wrappers/WrapperContainer";
import Muscle from "@components/icons/Muscle";
import FancyButton from "@components/buttons/Fancy";
import Heading from "@components/header/Title";
import ScrollableContainer from "@components/wrappers/ScrollableContainer";

export default function Home({ isHydrated }: Hydrated) {
	const { workoutState, setWorkoutState } = useWorkoutContext();

	const setWorkoutIdentity = () => {
		if (!isHydrated || workoutState.workout_id == null) {
			setWorkoutState((prevState) => ({
				...prevState,
				workout_id: uuidv4(),
				timestamp: Date.now(),
			}));
		}
	};

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
					<Link href="/workout" onClick={setWorkoutIdentity}>
						<FancyButton icon={<Muscle />} text={checkWorkoutId} />
					</Link>
				</WrapperContainer>
			</>
		)
	);
}
