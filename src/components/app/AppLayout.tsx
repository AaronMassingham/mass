import React from "react";
import Header from "@components/app/Header";
import { Inter } from "next/font/google";

//Contexts
import { WorkoutProvider } from "@contexts/WorkoutContext";

const inter = Inter({ subsets: ["latin"] });

const AppLayout = ({ children }: Props) => {
	return (
		<div className={`${inter.className}`}>
			<WorkoutProvider>
				<Header />
				<main>{children}</main>
			</WorkoutProvider>
		</div>
	);
};

type Props = {
	children: React.ReactNode;
};

export default AppLayout;
