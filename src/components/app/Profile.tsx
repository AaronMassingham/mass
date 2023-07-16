import styled from "styled-components";

//Components
import UserImage from "@components/app/UserImage";
import SettingsButton from "./SettingsButton";

const Profile = () => {
	return (
		<Container>
			<small>Aaron</small>
			<UserImage>
				<SettingsButton size={1.5} />
			</UserImage>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: var(--padding);
	position: relative;

	& div > div {
		position: absolute;
		bottom: -10%;
		transform: translateX(50%);
	}
`;

export default Profile;
