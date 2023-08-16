import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

//Contexts
import { useWorkoutContext } from "@contexts/WorkoutContextAlt";

//Constants
import { PREVWORKOUTS } from "@constants/PreviousWorkoutsDummy";

//Types
import { Hydrated } from "@typescriptTypes/miscTypes";

//Components
import PreviousWorkouts from "@components/data-display/PreviousWorkouts";
import WrapperContainer from "@components/wrappers/WrapperContainer";
import Muscle from "@components/icons/Muscle";
import FancyButton from "@components/buttons/FancyButton";
import Heading from "@components/app/Heading";
import ScrollableContainer from "@components/wrappers/ScrollableContainer";

type Props = {
	isHydrated: Hydrated;
};

export default function Home({ isHydrated }: Props) {
	const { workoutState, setWorkoutState } = useWorkoutContext();

	const setWorkoutIdentity = () => {
		if (!isHydrated || workoutState.workoutId == null) {
			setWorkoutState((prevState) => ({
				...prevState,
				workoutId: uuidv4(),
				timestamp: Date.now(),
			}));
		}
	};

	return (
		isHydrated && (
			<>
				<Head>
					<title>Mass Work</title>
					<meta name="description" content="Track your workouts" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<WrapperContainer variant="overflow">
					<Heading variant="default" text="Recent Workouts" />
					<ScrollableContainer>
						<PreviousWorkouts data={PREVWORKOUTS} />
					</ScrollableContainer>
				</WrapperContainer>

				<WrapperContainer variant="pinned">
					<Link href="/workout" onClick={setWorkoutIdentity}>
						<FancyButton
							icon={<Muscle />}
							text={workoutState.workoutId == null ? "start" : "continue"}
						/>
					</Link>
				</WrapperContainer>
			</>
		)
	);
}
