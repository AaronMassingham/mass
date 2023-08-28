//Styled Components
import { Container } from "@styles/styled-components/misc/Seperator";

//Types
import { SeperatorType } from "@typescriptTypes/CComponentTypes";

const Seperator = ({ direction }: SeperatorType) => {
	return (
		<Container $direction={direction}>
			<div>
				<div />
			</div>
		</Container>
	);
};

export default Seperator;
