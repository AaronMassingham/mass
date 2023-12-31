//Fonts
import { Inter } from "next/font/google";

//Types
import { ChildrenProps } from "@typescriptTypes/MiscTypes";

//Contexts
import { WorkoutProvider } from "@contexts/WorkoutContext";

//Components
import Header from "@components/header/Header";

//Styled Components
import { Container } from "@styles/styled-components/layout/AppLayout";

//Types
import { Hydrated } from "@typescriptTypes/MiscTypes";

const inter = Inter({ subsets: ["latin"] });

const AppLayout = ({ children }: ChildrenProps, isHydrated: Hydrated) => {
	return (
		<Container className={`${inter.className}`}>
			<WorkoutProvider>
				<Header />
				<main>{children}</main>
			</WorkoutProvider>
		</Container>
	);
};

export default AppLayout;
