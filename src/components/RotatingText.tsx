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
		fontSize: 1,
	};
	let text = "";

	if (variant === "start") {
		defaultStyles = { letterSpacing: 0.22, fontSize: 0.852 };
		text = "start workout";
	} else if (variant === "continue") {
		defaultStyles = { letterSpacing: 0.1, fontSize: 0.852 };
		text = "continue workout";
	} else if (variant === "add") {
		defaultStyles = { letterSpacing: 0.14, fontSize: 0.852 };
		text = "add new exercise";
	} else {
		defaultStyles = { letterSpacing: 0.14, fontSize: 0.852 };
		text = "loading";
	}

	let elementText = `${text}  .  ${text}  .  ${text}  .`;
	let styles = defaultStyles;

	return (
		<Container
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
		</Container>
	);
};

interface SvgProps {
	$spacing: number;
	$sizing: number;
}

const Container = styled(motion.svg)<SvgProps>`
	height: 130%;
	width: 130%;
	& > text {
		letter-spacing: ${(props) => props.$spacing && `${props.$spacing}rem`};
		font-size: ${(props) => props.$sizing && `${props.$sizing}rem`};
	}
`;

export default RotatingText;
