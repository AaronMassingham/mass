//Components
import RotatingText from "@components/buttons/RotatingText";

//Types
import { FancyButtonType } from "@typescriptTypes/componentTypes";

//Constants
import { pinnedButtonVariants } from "@constants/FramerVariants";

//Styled Components
import { Container } from "@styles/styled-components/buttons/Fancy";

const FancyButton = ({ icon, text }: FancyButtonType) => {
	return (
		<Container {...pinnedButtonVariants}>
			{icon}
			<RotatingText variant={text} />
		</Container>
	);
};

export default FancyButton;
