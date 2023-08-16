import styled from "styled-components";

const Plus = () => {
	return (
		<Container viewBox="0 0 160.2 160.2">
			<path d="M80.1 0C35.9 0 0 35.9 0 80.1s35.9 80.1 80.1 80.1 80.1-35.9 80.1-80.1S124.4 0 80.1 0zm38.8 87.5H87.5V119c0 4.1-3.3 7.3-7.3 7.3s-7.3-3.3-7.3-7.3V87.5H41.3c-4.1 0-7.3-3.3-7.3-7.3s3.3-7.3 7.3-7.3h31.5V41.3c0-4.1 3.3-7.3 7.3-7.3s7.3 3.3 7.3 7.3v31.5h31.5a7.36 7.36 0 0 1 0 14.7z" />
		</Container>
	);
};

const Container = styled.svg`
	height: 44%;
	aspect-ratio: 1;
	fill: white;
`;

export default Plus;
