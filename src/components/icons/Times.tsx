import styled from "styled-components";

type Props = {
	fillColor?: string;
	isRotated?: boolean;
};

const Times = ({ fillColor, isRotated }: Props) => {
	return (
		<Container $fill={fillColor} $rotated={isRotated}>
			<svg viewBox="0 0 20 20">
				<path d="m12.6 10 6.8-6.8c.7-.7.7-1.9 0-2.6-.7-.7-1.9-.7-2.6 0L10 7.4 3.2.5C2.5-.2 1.3-.2.6.5c-.7.7-.7 1.9 0 2.6L7.4 10 .6 16.8c-.7.7-.7 1.9 0 2.6.7.7 1.9.7 2.6 0l6.8-6.8 6.8 6.8c.7.7 1.9.7 2.6 0 .7-.7.7-1.9 0-2.6L12.6 10z" />
			</svg>
		</Container>
	);
};

interface IContainer {
	$fill?: string;
	$rotated?: boolean;
}

const Container = styled.div<IContainer>`
	width: 2rem;
	display: grid;
	place-items: center center;
	& svg {
		width: 1rem;
		aspect-ratio: 1;
		fill: ${(props) => (props.$fill ? props.$fill : "var(--bodyTextColor)")};

		${(props) => (props.$rotated ? "transform: rotate(45deg)" : null)}
	}
`;

export default Times;
