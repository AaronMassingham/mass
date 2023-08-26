import { motion } from "framer-motion";

//Styled Components
import { Container } from "@styles/styled-components/header/PullTab";

const Svg = () => {
	return (
		<svg viewBox="0 0 50 25">
			<path d="M50,25c-9.8,0-19-4.6-25-12.5l0,0C19,4.6,9.8,0,0,0h50V25z" />
		</svg>
	);
};

const PullTab = ({ text, hasWorkoutName }: Props) => {
	return (
		<Container>
			<motion.div
				initial={{ color: "#FFF" }}
				animate={{ color: hasWorkoutName ? "var(--gray700)" : "#FFF" }}
				transition={{ delay: 1, duration: 1 }}
			>
				<Svg />
				{text}
				<Svg />
			</motion.div>
		</Container>
	);
};

type Props = {
	text: string;
	hasWorkoutName: boolean;
};
export default PullTab;
