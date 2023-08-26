import styled from "styled-components";
export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: var(--padding);
	position: relative;
	& div > div {
		position: absolute;
		bottom: -25%;
		transform: translateX(calc(50% - 3px));
		left: 0;
	}
`;
