import styled from "styled-components";

//Components
import Logo from "@components/Logo";
import Profile from "@components/app/Profile";

const Header = () => {
	return (
		<Container>
			<Logo />
			<Profile />
		</Container>
	);
};

const Container = styled.header`
	width: 100%;
	height: 5rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--primaryColor);
	padding: 0 0 var(--padding) 0;
`;

export default Header;
