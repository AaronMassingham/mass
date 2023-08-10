import styled from "styled-components";
import { motion } from "framer-motion";

const Svg = () => {
	return (
		<svg viewBox="0 0 50 25">
			<path d="M50,25c-9.8,0-19-4.6-25-12.5l0,0C19,4.6,9.8,0,0,0h50V25z" />
		</svg>
	);
};

type Props = {
	text: string;
};

const PullTab = ({ text }: Props) => {
	return (
		<Container>
			<motion.div layout="position">
				<Svg />
				{text}
				<Svg />
			</motion.div>
		</Container>
	);
};

const Container = styled(motion.div)`
	width: 100%;
	background: var(--secondaryDark);
	display: flex;
	justify-content: center;
	text-align: center;
	position: relative;
	font-size: 0.8rem;
	& div:first-of-type {
		position: relative;
		display: flex;
		align-items: center;
		text-align: center;
	}
	& div:last-of-type {
		position: absolute;
		height: 1.5rem;
		min-width: 4rem;
		padding: 0 1rem;

		background: var(--secondaryDark);
		& svg {
			position: absolute;
			height: 100%;
			aspect-ratio: 1/0.5;
			fill: var(--secondaryDark);
			top: 0;
			right: 100%;
			&:last-of-type {
				left: unset;
				right: -3rem;
				transform: rotateY(180deg);
			}
		}
	}

	-webkit-box-shadow: 0px 6px 25px 15px rgba(var(--primaryDarkGrad), 1);
	-moz-box-shadow: 0px 6px 25px 15px rgba(var(--primaryDarkGrad), 1);
	box-shadow: 0px 6px 25px 15px rgba(var(--primaryDarkGrad), 1);
`;

export default PullTab;
