import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const PublicLayout = ({ children }: Props) => {
	return (
		<div className={`${inter.className}`}>
			<main>{children}</main>
		</div>
	);
};

type Props = {
	children: React.ReactNode;
};

export default PublicLayout;
