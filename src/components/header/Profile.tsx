//Components
import UserImage from "@components/header/UserImage";
import Cog from "@components/icons/Cog";

//Styled Components
import { Container } from "@styles/styled-components/header/Profile";

const Profile = () => {
	const profileSize = 3.75;

	return (
		<Container>
			<UserImage width={profileSize}>
				<Cog size={profileSize / 2} />
			</UserImage>
		</Container>
	);
};

export default Profile;
