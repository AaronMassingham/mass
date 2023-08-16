import styled from "styled-components";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

//Context
import { useWorkoutContext } from "@contexts/WorkoutContextAlt";

//Components
import Profile from "@components/app/Profile";
import Nav from "@components/buttons/Nav";
import PullTab from "@components/app/PullTab";
import BackBtn from "@components/buttons/BackBtn";

//Hooks
import { useHydration } from "@hooks/useHydration";

const Header = () => {
	const { workoutState } = useWorkoutContext();
	const isHydrated = useHydration();

	const router = useRouter();
	const user = "aaron";
	const pathNotIndex = router.pathname !== "/";

	const backButtonCondition = pathNotIndex && <BackBtn />;

	const parent = {
		initial: {
			height: "0rem",
			transition: { when: "beforeChildren", duration: 0.5 },
		},
		animate: {
			height: "2rem",
			transition: { duration: 0.5 },
		},
		exit: {
			height: "0rem",
			transition: { when: "afterChildren", duration: 0.5 },
		},
	};

	const child = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.35,
				delay: 0.5,
			},
		},
		exit: {
			opacity: 0,
		},
	};

	return (
		isHydrated && (
			<Container>
				<HeaderContainer>
					<Profile />
					<AnimatePresence mode="wait">{backButtonCondition}</AnimatePresence>
					<Nav />
				</HeaderContainer>
				<AnimatePresence>
					{workoutState.name && (
						<motion.div
							key="test"
							variants={parent}
							initial="initial"
							animate="animate"
							exit="exit"
							layout
						>
							<motion.h1
								variants={child}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								{workoutState.name}
							</motion.h1>
						</motion.div>
					)}

					<PullTab hasWorkoutName={workoutState.name ? true : false} text={user} />
				</AnimatePresence>
			</Container>
		)
	);
};

const Container = styled(motion.header)`
	position: relative;
	z-index: 10;

	&:before,
	&:after {
		position: absolute;
		z-index: 2;
		width: 2rem;
		height: 2rem;
		bottom: -2rem;
		content: "";
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' viewBox='0 0 65 65'%3E%3Cpath fill='%23111111' d='M0 65A65 65 0 0 1 65 0v-2H-2v67h2z'/%3E%3C/svg%3E");
	}
	&:after {
		right: 0;
		transform: rotate(90deg);
	}
	& > div:first-of-type {
		background: var(--gray800);
	}
`;
const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: var(--padding);
	background-color: var(--gray800);
	position: relative;
	z-index: 2;
	& > div:first-of-type {
		flex: 1;
		text-align: center;
	}
`;

export default Header;
