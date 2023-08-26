import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	position: relative;
	& > div {
		position: relative;
		width: 100%;
		text-align: center;
		&:last-of-type {
			padding-top: 1rem;
			display: grid;
			place-items: center;
		}
	}
`;
