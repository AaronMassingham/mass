import styled, { css } from "styled-components";

const WrapperContainer = ({ children, variant }: Props) => {
	return <Container $variant={variant}>{children}</Container>;
};

type Props = {
	children: React.ReactNode;
	variant: "overflow" | "pinned";
};

type StyleProps = {
	$variant: "overflow" | "pinned";
};

const Container = styled.div<StyleProps>`
	${(props) => {
		switch (props.$variant) {
			case "overflow":
				return css`
					flex: 1;
					min-height: calc(100% - 220px);
					max-height: calc(100% - 220px);
					overflow: scroll;
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
					background-color: var(--primaryDark);
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;

					&:before {
						pointer-events: none;
						content: "";
						width: 100%;
						height: 3rem;
						position: absolute;
						top: -3rem;

						background: linear-gradient(
							0deg,
							rgba(var(--primaryDarkGrad), 1) 50%,
							rgba(var(--primaryDarkGrad), 0) 100%
						);
					}
				`;
		}
	}}
`;

export default WrapperContainer;
