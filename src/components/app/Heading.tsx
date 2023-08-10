import styled, { css } from "styled-components";

//Components
import Seperator from "./Seperator";

type Props = {
	text: string;
	secondaryText?: string | React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLElement>;
	variant: "default" | "plain";
};

const Heading = ({ text, secondaryText, onClick, variant }: Props) => {
	const isPlain = variant === "plain";

	return (
		<Container $variant={variant}>
			<h1 onClick={onClick}>{text}</h1>
			{secondaryText && <span>{secondaryText}</span>}
			{!isPlain && <Seperator />}
		</Container>
	);
};

interface ContainerProps {
	$variant: "default" | "plain";
}

const Container = styled.div<ContainerProps>`
	position: sticky;
	top: 0;
	z-index: 5;
	text-align: center;
	display: grid;
	gap: 0.5rem;
	&:after {
		position: absolute;
		width: 100%;
		height: 100%;
		background: var(--primaryDark);
		content: "";
		z-index: -1;
		bottom: 0;
	}
	& span {
		color: var(--primaryColor);
	}
	${(props) => {
		switch (props.$variant) {
			case "default":
				return css`
					padding-top: 0.5rem;
					& h1 {
						padding-bottom: 1rem;
					}
				`;
			case "plain":
				return css`
					padding: 2rem 0 2rem 0;
				`;
		}
	}}
`;

export default Heading;
