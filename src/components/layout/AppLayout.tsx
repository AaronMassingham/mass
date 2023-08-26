//Fonts
import { Inter } from "next/font/google";

//Contexts
import { WorkoutProvider } from "@contexts/WorkoutContextAlt";

//Components
import Header from "@components/header/Header";

//Styled Components
import { Container } from "@styles/styled-components/layout/AppLayout";

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

export default AppLayout;
