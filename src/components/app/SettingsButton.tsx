import styled from "styled-components";

const SettingsButton = ({ size }: Props) => {
	return (
		<Container width={size ? size : 2}>
			<svg viewBox="0 0 26.1 27.2">
				<path d="M25.5 17.3v.2c-.5 1.6-1.8 3.8-2.9 5-.1.1-.3.2-.5.2-.1 0-.2 0-.3-.1l-2.2-1.3c-.8.7-2.2 1.5-3.2 1.8v2.6c0 .3-.2.6-.5.6-.8.2-2.1.3-2.9.3s-2.1-.1-2.9-.3c-.3-.1-.5-.3-.5-.6v-2.6c-1-.3-2.4-1.2-3.2-1.8l-2.2 1.3c-.1 0-.2.1-.3.1-.2 0-.4-.1-.5-.2-1.1-1.2-2.4-3.4-2.9-5v-.2c0-.2.1-.4.3-.6L3 15.4c-.1-.5-.2-1.3-.2-1.8s.1-1.3.2-1.8L.8 10.5c-.2-.1-.3-.3-.3-.5v-.2C1 8.2 2.3 6 3.4 4.8c.1-.1.3-.2.5-.2.1 0 .2 0 .3.1L6.4 6c.8-.7 2.2-1.5 3.2-1.8V1.5c0-.3.2-.6.5-.6.8-.2 2.1-.3 2.9-.3.8 0 2.1.1 2.9.3.3.1.5.3.5.6v2.6c1 .3 2.4 1.2 3.2 1.8l2.2-1.3c.1 0 .2-.1.3-.1.2 0 .4.1.5.2 1.1 1.2 2.4 3.4 2.9 5v.2c0 .2-.1.4-.3.6L23 11.7c.1.5.2 1.3.2 1.8s-.1 1.3-.2 1.8l2.2 1.3c.2.2.3.5.3.7zm-8.3-3.7c0-2.3-1.9-4.2-4.2-4.2s-4.2 1.9-4.2 4.2 1.9 4.2 4.2 4.2c2.4 0 4.2-1.9 4.2-4.2z" />
			</svg>
		</Container>
	);
};

type Props = {
	size?: number;
};

interface IProps {
	width?: number;
}

const Container = styled.div<IProps>`
	width: ${(props) => props.width}em;
	aspect-ratio: 1;
	border-radius: 100%;
	background: var(--primaryDark);
	display: grid;
	place-items: center;
	& svg {
		max-width: 60%;
		fill: var(--bodyTextColor);
	}
`;

export default SettingsButton;
