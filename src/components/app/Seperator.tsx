import styled from "styled-components";

const Seperator = () => {
	return (
		<Container>
			<div>
				<div />
			</div>
		</Container>
	);
};

const Container = styled.div`
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
