import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import { rotatingTextAnimation } from "@constants/FramerVariants";

type Props = {
	variant: "start" | "continue" | "add" | "loading";
};

const RotatingText = ({ variant }: Props) => {
	let defaultStyles = {
		letterSpacing: 1,
		fontSize: 0.852,
	};
	let text = "";

	if (variant === "start") {
		defaultStyles = { letterSpacing: 0.225, fontSize: 0.852 };
		text = "start workout";
	} else if (variant === "continue") {
		defaultStyles = { letterSpacing: 0.105, fontSize: 0.852 };
		text = "continue workout";
	} else if (variant === "add") {
		defaultStyles = { letterSpacing: 0.147, fontSize: 0.852 };
		text = "add new exercise";
	} else {
		defaultStyles = { letterSpacing: 0.14, fontSize: 0.852 };
		text = "loading";
	}

	let elementText = `${text}  .  ${text}  .  ${text}  .`;
	let styles = defaultStyles;

	return (
		<Container>
			<Div
				animate={{ rotate: [0, 360] }}
				transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
			/>
			<Svg
				id="rotatingText"
				viewBox="0 0 200 200"
				fill="white"
				$spacing={styles.letterSpacing}
				$sizing={styles.fontSize}
				{...rotatingTextAnimation}
			>
				<defs>
					<path
						id="circle"
						d="M25,100c0-41.4,33.6-75,75-75 M100,25c41.4,0,75,33.6,75,75s-33.6,75-75,75s-75-33.6-75-75"
					></path>
				</defs>
				<text width="400">
					<textPath alignmentBaseline="text-before-edge" xlinkHref="#circle">
						{elementText}
					</textPath>
				</text>
			</Svg>
		</Container>
	);
};

interface SvgProps {
	$spacing: number;
	$sizing: number;
}

const Div = styled(motion.div)`
	width: 55%;
	height: 55%;
	position: absolute;
	border-radius: 100%;
	left: 22.5%;
	top: 22.5%;

	&:before,
	&:after {
		content: " ";
		position: absolute;
		border-radius: 100%;
	}

	&:before {
		z-index: 5;
		background: var(--gray900);
		width: calc(100% - 4px);
		height: calc(100% - 4px);
		left: 2px;
		top: 2px;
	}
	&:after {
		z-index: -1;
		background: linear-gradient(45deg, rgba(255, 42, 72, 1) 0%, rgba(255, 125, 42, 1) 100%);
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}
`;
const Container = styled(motion.div)`
	height: 100%;
	width: 100%;
	display: grid;
	place-items: center center;
`;
const Svg = styled(motion.svg)<SvgProps>`
	position: relative;
	width: 160px;

	& > text {
		letter-spacing: ${(props) => props.$spacing && `${props.$spacing}rem`};
		font-size: ${(props) => props.$sizing && `${props.$sizing}rem`};
	}
`;

export default RotatingText;
