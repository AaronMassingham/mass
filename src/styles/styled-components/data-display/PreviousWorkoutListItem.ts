import styled from "styled-components";

export const Container = styled.div`
	height: 20%;
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	position: relative;
	flex: 1;

	border-bottom: 1px solid var(--gray700);
	scroll-snap-align: start;
	&:last-of-type {
		border: 0;
	}
	& span {
		font-size: 0.8rem;
	}
	& > div {
		color: white;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		& > *:first-child {
			color: var(--brand500);
		}
	}
`;
