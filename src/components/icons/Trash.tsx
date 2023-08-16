import styled from "styled-components";

const Trash = () => {
	return (
		<Container viewBox="0 0 15.8 18">
			<path d="M15.8 2.5v.6c0 .2-.1.3-.3.3h-.7l-1.2 13.1c0 .8-.8 1.5-1.6 1.5H3.8c-.9 0-1.6-.7-1.7-1.5L.9 3.4H.3c-.2 0-.3-.2-.3-.3v-.6c0-.2.1-.3.3-.3H4L5.2.6C5.4.3 6 0 6.5 0h2.8c.5 0 1.1.3 1.3.7l1.2 1.6h3.7c.1-.1.3.1.3.2zm-2.1.9H2.1l1.2 13c0 .3.3.5.6.5H12c.3 0 .5-.2.6-.5l1.1-13zM5.3 2.2h5.1l-.7-.9c-.1-.1-.3-.2-.4-.2H6.5c-.2 0-.4.1-.5.2l-.7.9z" />
		</Container>
	);
};

const Container = styled.svg`
	height: 44%;
	aspect-ratio: 1;
	fill: var(--brand500);
`;

export default Trash;
