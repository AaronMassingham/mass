//Components
import RotatingText from "@components/buttons/RotatingText";

//Types
import { FancyButtonType } from "@typescriptTypes/ComponentTypes";

//Constants
import { pinnedButtonVariants } from "@constants/FramerVariants";

//Styled Components
import { Container } from "@styles/styled-components/buttons/Fancy";

const FancyButton = ({ icon, text, onClick }: FancyButtonType) => {
	return (
		<Container {...pinnedButtonVariants} onClick={onClick}>
			{icon}
			<RotatingText variant={text} />
		</Container>
	);
};

export default FancyButton;
