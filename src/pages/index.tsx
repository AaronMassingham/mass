import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

//Contexts
import { WorkoutContext } from "@contexts/WorkoutContext";

//Components
import PreviousWorkouts from "@components/app/PreviousWorkouts";
import WrapperContainer from "@components/app/WrapperContainer";
import Muscle from "@components/icons/Muscle";
import FancyButton from "@components/buttons/FancyButton";
import Heading from "@components/app/Heading";

export default function Home() {
	const { workoutState, setWorkoutState } = useContext(WorkoutContext);

	const setWorkoutIdentity = () => {
		workoutState.workoutId == null &&
			setWorkoutState((prevState) => ({
				...prevState,
				workoutId: uuidv4(),
				timestamp: Date.now(),
			}));
	};

	const previousWorkoutsDemo = [
		{
			date: "4th June 2023",
			title: "Back & Biceps",
			vol: 2320,
		},
		{
			date: "2nd June 2023",
			title: "Legs",
			vol: 5000,
		},
		{
			date: "1st June 2023",
			title: "Shoulders",
			vol: 2320,
		},
		{
			date: "1st June 2023",
			title: "Shoulders",
			vol: 2320,
		},
		{
			date: "1st June 2023",
			title: "Shoulders",
			vol: 2320,
		},
		{
			date: "1st June 2023",
			title: "Shoulders",
			vol: 2320,
		},
		{
			date: "9st June 2023",
			title: "Shoulders",
			vol: 2320,
		},
	];

	return (
		<>
			<Head>
				<title>Mass Work</title>
				<meta name="description" content="Track your workouts" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<WrapperContainer variant="overflow">
				<Heading variant="default" text="Recent Workouts" />
				<PreviousWorkouts data={previousWorkoutsDemo} />
			</WrapperContainer>

			<WrapperContainer variant="pinned">
				<Link href="/workout" onClick={setWorkoutIdentity}>
					<FancyButton icon={<Muscle />} text={workoutState.name == "" ? "start" : "continue"} />
				</Link>
			</WrapperContainer>
		</>
	);
}
