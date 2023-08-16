import styled from "styled-components";

//Fonts
import { Inter } from "next/font/google";

//Contexts
import { WorkoutProvider } from "@contexts/WorkoutContextAlt";

//Components
import Header from "@components/app/Header";

const inter = Inter({ subsets: ["latin"] });

const AppLayout = ({ children }: Props) => {
	return (
		<Container className={`${inter.className}`}>
			<WorkoutProvider>
				<Header />
				<main>{children}</main>
			</WorkoutProvider>
		</Container>
	);
};

type Props = {
	children: React.ReactNode;
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100svh;
`;

export default AppLayout;
