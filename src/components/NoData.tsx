import styled from "styled-components";

type Props = {
	message: string;
};

const NoData = ({ message }: Props) => {
	return <Container>{message}</Container>;
};

const Container = styled.div`
	height: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px dashed var(--secondaryLight);
	color: var(--secondaryLight);
	border-radius: var(--radius);
	text-wrap: balance;
`;

export default NoData;
