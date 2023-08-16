import styled from "styled-components";

type Props = {
	direction: "up" | "down";
};

const Seperator = ({ direction }: Props) => {
	return (
		<Container $direction={direction}>
			<div>
				<div />
			</div>
		</Container>
	);
};

interface ContainerProps {
	$direction: string;
}

const Container = styled.div<ContainerProps>`
	transform: ${(props) => props.$direction === "up" && "rotate(180deg)"};
	& > div {
		margin-top: 0;
		width: 100%;
		height: 1px;
		background: linear-gradient(
			90deg,
			rgba(10, 10, 10, 1) 0%,
			rgba(255, 125, 42, 1) 7%,
			rgba(255, 42, 72, 1) 50%,
			rgba(255, 125, 42, 1) 93%,
			rgba(10, 10, 10, 1) 100%
		);
		& > div {
			margin: auto;
			width: 0;
			height: 0;
			border-left: 5px solid transparent;
			border-right: 5px solid transparent;
			border-top: 5px solid rgba(255, 42, 72, 1);
		}
	}
`;

export default Seperator;
