import styled from "styled-components";

type Props = {
	fillColor?: string;
	bgColor?: string;
	isRotated?: boolean;
};

const Times = ({ fillColor, bgColor, isRotated }: Props) => {
	return (
		<Container $fillColor={fillColor} $rotated={isRotated} $bgColor={bgColor}>
			<svg viewBox="0 0 20 20">
				<path d="m12.6 10 6.8-6.8c.7-.7.7-1.9 0-2.6-.7-.7-1.9-.7-2.6 0L10 7.4 3.2.5C2.5-.2 1.3-.2.6.5c-.7.7-.7 1.9 0 2.6L7.4 10 .6 16.8c-.7.7-.7 1.9 0 2.6.7.7 1.9.7 2.6 0l6.8-6.8 6.8 6.8c.7.7 1.9.7 2.6 0 .7-.7.7-1.9 0-2.6L12.6 10z" />
			</svg>
		</Container>
	);
};

interface IContainer {
	$fillColor?: string;
	$bgColor?: string;
	$rotated?: boolean;
}

const Container = styled.div<IContainer>`
	width: 2rem;
	height: 2rem;
	display: grid;
	place-items: center center;

	background-color: ${(props) => props.$bgColor && props.$bgColor};
	& svg {
		width: 1rem;
		aspect-ratio: 1;
		fill: ${(props) => (props.$fillColor ? props.$fillColor : "#FFFFFF")};

		${(props) => (props.$rotated ? "transform: rotate(45deg)" : null)}
	}
`;

export default Times;
