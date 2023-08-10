import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const UserImage = ({ children, width }: Props) => {
	return (
		<Link href="/profile">
			<Container $width={width}>
				<Image src="/test-profile.jpg" alt="Profile Image" fill />
				{children}
			</Container>
		</Link>
	);
};

type Props = {
	children?: React.ReactNode;
	width: number;
};
interface ContainerProps {
	$width: number;
}

const Container = styled.div<ContainerProps>`
	width: ${(props) => props.$width && `${props.$width}rem`};
	aspect-ratio: 1;
	border-radius: 100%;
	position: relative;
	transform-style: preserve-3d;
	border: 3px solid var(--secondaryDark);
	& img {
		border-radius: 100%;
	}
	& > *:not(img) {
		z-index: 5;
	}
	&:before {
		content: "";
		position: absolute;

		background: linear-gradient(
			0deg,
			rgba(var(--primaryDarkGrad), 1) 10%,
			rgba(var(--primaryDarkGrad), 0) 50%
		);
		bottom: -1px;
		left: 0;
		height: 100%;
		width: 100%;
		border-radius: 4rem;
		z-index: 1;
	}
	&:after {
		content: "";
		position: absolute;
		background: linear-gradient(45deg, rgba(255, 42, 72, 1) 0%, rgba(255, 125, 42, 1) 100%);
		width: 120%;
		height: 120%;
		border-radius: 100%;
		transform: translateZ(-1px);
		top: -10%;
		left: -10%;
	}
`;

export default UserImage;
