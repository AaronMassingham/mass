import styled from "styled-components";

export const Container = styled.div`
	width: 100%;

	margin: auto;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	position: relative;
	z-index: 2;
	scroll-snap-align: start; //<-- causing janky behaviour on state update
	& > div {
		&:first-child,
		&:last-child {
			width: 1rem;
			color: var(--brand500);
		}
	}
`;

export const Value = styled.div`
	border-bottom: 1px solid var(--gray700);
	flex: 1;
	border-radius: var(--radius);
	padding-bottom: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;
