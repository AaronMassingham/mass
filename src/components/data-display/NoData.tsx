//Constants
import { fadeInOutVariants } from "@constants/FramerVariants";

//Types
import { NoDataType } from "@typescriptTypes/componentTypes";

//Styled Components
import { Container } from "@styles/styled-components/data-display/NoData";

const NoData = (props: NoDataType) => {
	const content =
		props.type === "message" ? (
			<div style={{ border: "1px dashed var(--gray700)" }}>
				<h1>{props.message}</h1>
				{props.smalltext && <small>{props.smalltext}</small>}
			</div>
		) : (
			<div style={{ opacity: 0.2 }}>{props.hasIcon}</div>
		);

	return (
		<Container layout="size" {...fadeInOutVariants}>
			{content}
		</Container>
	);
};

export default NoData;
