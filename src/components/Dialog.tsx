import { useState, MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import reactDom from "react-dom";

//Components
import Times from "./icons/Times";
import Button from "./buttons/Button";

//Styled Components
import { Container, ButtonContainer } from "@styles/styled-components/Dialog";

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

type Props = {
	children: React.ReactNode;
	showCloseBtnCondition: boolean;
	showDialog: boolean;
	text?: string;
	smallText?: string;
	hasOtherEvent?: () => void;
};
export default Dialog;
