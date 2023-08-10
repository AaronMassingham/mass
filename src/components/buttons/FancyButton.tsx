import styled from "styled-components";
import RotatingText from "@components/RotatingText";

type Props = {
	icon: React.ReactNode;
	text: "start" | "continue" | "add";
};

const FancyButton = ({ icon, text }: Props) => {
	return (
		<Container>
			{icon}
			<RotatingText variant={text} />
		</Container>
	);
};

const Container = styled.button`
	height: 180px;
	width: 180px;
	overflow: clip;
	display: grid;
	place-items: center;
	aspect-ratio: 1 / -1;
	position: relative;
	& > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
	&:before,
	&:after {
		position: absolute;

		transform: translateY(0) translateX(0);
		content: "";
		border-radius: 100%;
	}
	&:after {
		height: 100px;
		width: 100px;
		z-index: -2;
		background: linear-gradient(45deg, rgba(255, 42, 72, 1) 0%, rgba(255, 125, 42, 1) 100%);
	}
	&:before {
		height: 95px;
		width: 95px;
		background: var(--primaryDark);
		z-index: -1;
	}
`;

export default FancyButton;
