//Components
import { rotatingTextAnimation } from "@constants/FramerVariants";

//Styled Components
import { Container, Svg, Div } from "@styles/styled-components/buttons/RotatingText";

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

export default RotatingText;
