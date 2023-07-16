import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

//Contexts
import { WorkoutContext } from "@contexts/WorkoutContext";

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
	return (
		<>
			<Head>
				<title>Mass Work</title>
				<meta name="description" content="Track your workouts" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>Home</h1>
			<Link href="/workout" onClick={setWorkoutIdentity}>
				{workoutState.workoutId == null ? "Start Workout" : "Continue Workout"}
			</Link>
		</>
	);
}
