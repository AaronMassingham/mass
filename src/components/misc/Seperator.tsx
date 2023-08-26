//Styled Components
import { Container } from "@styles/styled-components/misc/Seperator";

type Props = {
	direction: "up" | "down";
};

const Seperator = ({ direction }: Props) => {
	return (
		<Container $direction={direction}>
			<div>
				<div />
			</div>
		</Container>
	);
};

export default Seperator;
