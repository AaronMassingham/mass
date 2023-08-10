import styled from "styled-components";

//Components
import UserImage from "@components/app/UserImage";
import SettingsButton from "./SettingsButton";

const Profile = () => {
	const profileSize = 3.75;

	return (
		<Container>
			<UserImage width={profileSize}>
				<SettingsButton size={profileSize / 2} />
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
		bottom: -25%;
		transform: translateX(calc(50% - 3px));
		left: 0;
	}
`;

export default Profile;
