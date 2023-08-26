import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: var(--padding);
	position: absolute;
	right: var(--padding);
	& > button {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		background: none;
		border: 0;
		& > span {
			width: 6px;
			height: 6px;
			border-radius: 100%;
			background-color: white;
		}
	}
`;
