import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const WrapperContainer = ({ children, variant, hasSibling }: Props) => {
	return (
		<Container layout $variant={variant} $hasSibling={hasSibling}>
			{children}
		</Container>
	);
};

type Props = {
	children: React.ReactNode;
	variant: "overflow" | "pinned";
	hasSibling?: boolean;
};

type StyleProps = {
	$variant: "overflow" | "pinned";
	$hasSibling?: boolean;
};

const Container = styled(motion.div)<StyleProps>`
	max-height: ${(props) => (props.$hasSibling === false ? "unset" : "calc(100% - 220px)")};
	${(props) => {
		switch (props.$variant) {
			case "overflow":
				return css`
					flex: 1;
					display: flex;
					flex-direction: column;
					min-height: calc(100% - 220px);
					overflow: hidden;
					height: 100%;
					scrollbar-width: none;
					&::-webkit-scrollbar {
						display: none;
					}
				`;
			case "pinned":
				return css`
					background: red;
					position: sticky;
					z-index: 3;
					bottom: 0;
					left: 0;
					right: 0;
					height: 220px;
					padding-bottom: var(--padding);

					margin-bottom: -1rem;
					background-color: var(--gray900);
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				`;
		}
	}}
`;

export default WrapperContainer;
