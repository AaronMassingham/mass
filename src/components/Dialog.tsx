import { useEffect, useState, MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import reactDom from "react-dom";
import styled from "styled-components";
import Times from "./icons/Times";
import Button from "./buttons/Button";

//Types

type SecondaryHandlerType = () => void;

type Props = {
	children: React.ReactNode;
	showCloseBtnCondition: boolean;
	showDialog: boolean;
	text?: string;
	smallText?: string;
	hasOtherEvent?: SecondaryHandlerType;
};

const Dialog = ({
	children,
	showCloseBtnCondition,
	text,
	smallText,
	showDialog,
	hasOtherEvent,
}: Props) => {
	const [dialog] = useState(showDialog);

	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		hasOtherEvent && hasOtherEvent();
	};

	console.log(showDialog);

	const content = dialog && (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<motion.div layout="preserve-aspect">
				{text && <h2>{text}</h2>}
				{smallText && <p>{smallText}</p>}
				{children}
				<AnimatePresence>
					{showCloseBtnCondition && (
						<ButtonContainer>
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}
								transition={{ delay: 0.25 }}
							>
								<Button
									onClick={clickHandler}
									text={<Times isRotated fillColor="var(--gray900)" />}
								/>
							</motion.div>
						</ButtonContainer>
					)}
				</AnimatePresence>
			</motion.div>
		</Container>
	);

	if (typeof window === "object") {
		const modalContainer = document.getElementById("modal-container");

		if (!modalContainer) {
			return null;
		}

		return reactDom.createPortal(content, modalContainer as HTMLElement);
	}
	return null;
};

const Container = styled(motion.div)`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 9999;
	padding: 2rem;
	display: grid;
	background: rgba(var(--gray900Grad), 0.8);
	place-items: center;
	backdrop-filter: blur(5px);
	& p {
		text-align: center;
		text-transform: initial;
		opacity: 0.6;
		max-width: 250px;
	}
	& > div {
		display: grid;
		place-items: center;
		gap: 2rem;
		position: relative;
		z-index: 2;
		width: 100%;
		height: auto;
		padding: 5rem 2rem;
		background: var(--gray800);
		border-radius: 10px;
		background: linear-gradient(45deg, rgba(255, 42, 72, 1) 0%, rgba(255, 125, 42, 1) 100%);

		&:before {
			position: absolute;
			z-index: -1;
			content: " ";
			width: calc(100% - 2px);
			height: calc(100% - 2px);
			left: 1px;
			top: 1px;
			background: var(--gray800);
			border-radius: 10px;
		}
	}
`;

const ButtonContainer = styled(motion.div)`
	position: absolute;
	z-index: 999999;
	bottom: -0.5rem;
	left: 0;
	width: 100%;
	height: 3rem;
	display: grid;
	place-items: center;
	& button {
		position: relative;
		&:before,
		&:after {
			content: "";
			position: absolute;
			width: 150%;
			height: 150%;
			border-radius: 100%;
			background: var(--gray800);
			z-index: -1;
		}
		&:after {
			background: linear-gradient(
				90deg,
				rgba(255, 125, 42, 1) 0%,
				rgba(255, 42, 72, 1) 50%,
				rgba(255, 125, 42, 1) 100%
			);
			z-index: -2;
			transform: translateY(2px);
		}
	}
`;

export default Dialog;
