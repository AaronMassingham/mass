import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

//Context
import { useWorkoutContext } from "@contexts/WorkoutContext";

//Components
import Profile from "@components/header/Profile";
import Nav from "@components/buttons/Nav";
import PullTab from "@components/header/PullTab";
import BackButton from "@components/buttons/Back";

//Hooks
import { useHydration } from "@hooks/useHydration";

//Constants
import { headerTitleParentAnimation, headerTitleChildAnimation } from "@constants/FramerVariants";

//Styled Components
import { Container } from "@styles/styled-components/header/Header";

const Header = () => {
	const { workoutState } = useWorkoutContext();
	const isHydrated = useHydration();

	const router = useRouter();
	const user = "aaron";
	const pathNotIndex = router.pathname !== "/";

	const backButtonCondition = pathNotIndex && <BackButton />;

	return (
		isHydrated && (
			<Container>
				<header>
					<Profile />
					<AnimatePresence mode="wait">{backButtonCondition}</AnimatePresence>
					<Nav />
				</header>
				<AnimatePresence>
					{workoutState.name && (
						<motion.div {...headerTitleParentAnimation} key="test" layout>
							<motion.h1 {...headerTitleChildAnimation}>{workoutState.name}</motion.h1>
						</motion.div>
					)}

					<PullTab hasWorkoutName={workoutState.name ? true : false} text={user} />
				</AnimatePresence>
			</Container>
		)
	);
};

export default Header;
