import Image from "next/image";
import Link from "next/link";

//Styled Components
import { Container } from "@styles/styled-components/header/UserImage";

const UserImage = ({ children, width }: Props) => {
	return (
		<Link href="/profile">
			<Container $width={width}>
				<Image src="/test-profile.jpg" alt="Profile Image" fill sizes="120px" />
				{children}
			</Container>
		</Link>
	);
};

type Props = {
	children?: React.ReactNode;
	width: number;
};

export default UserImage;
