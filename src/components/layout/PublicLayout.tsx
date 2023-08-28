//Fonts
import { Inter } from "next/font/google";

//Types
import { ChildrenProps } from "@typescriptTypes/MMiscTypes";

const inter = Inter({ subsets: ["latin"] });

const PublicLayout = ({ children }: ChildrenProps) => {
	return (
		<div className={`${inter.className}`}>
			<main>{children}</main>
		</div>
	);
};

export default PublicLayout;
