//Styled Components
import { LayoutContainer as Container } from "@styles/styled-components/wrappers/wrappers";

const WrapperContainer = ({ children, variant, hasSibling }: Props) => {
	return (
		<Container layout $variant={variant} $hasSibling={hasSibling}>
			{children}
		</Container>
	);
};

type Props = {
	children: React.ReactNode;
	variant: "main" | "pinned";
	hasSibling?: boolean;
};

export default WrapperContainer;
