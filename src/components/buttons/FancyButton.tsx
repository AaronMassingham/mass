import React, { ReactNode } from "react";
import RotatingText from "@components/buttons/RotatingText";

//Constants
import { pinnedButtonVariants } from "@constants/FramerVariants";

//Styled Components
import { Container } from "@styles/styled-components/buttons/Fancy";

type Props = {
	icon: ReactNode;
	text: "start" | "continue" | "add" | "loading";
};

const FancyButton = ({ icon, text }: Props) => {
	return (
		<Container {...pinnedButtonVariants}>
			{icon}

			<RotatingText variant={text} />
		</Container>
	);
};

export default FancyButton;
