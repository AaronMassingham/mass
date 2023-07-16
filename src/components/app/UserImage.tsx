import Link from "next/link";
import styled from "styled-components";

const UserImage = ({ children }: Props) => {
	return (
		<Link href="/profile">
			<Container>{children}</Container>
		</Link>
	);
};

type Props = {
	children?: React.ReactNode;
};

const Container = styled.div`
	width: 3rem;
	height: 3rem;
	background: white;
	border-radius: 100%;
	position: relative;
	transform-style: preserve-3d;
	&:after {
		content: "";
		position: absolute;
		background: var(--primaryColor);
		width: 100%;
		height: 100%;
		border-radius: 100%;
		transform: translateZ(-1px);
		top: -1px;
	}
`;

export default UserImage;
