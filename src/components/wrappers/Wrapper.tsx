//Styled Components
import { LayoutContainer as Container } from "@styles/styled-components/wrappers/wrappers";

//Types
import { WrapperType } from "@typescriptTypes/ComponentTypes";

const WrapperContainer = ({ children, variant, hasSibling }: WrapperType) => {
	return (
		<Container layout $variant={variant} $hasSibling={hasSibling}>
			{children}
		</Container>
	);
};

export default WrapperContainer;
