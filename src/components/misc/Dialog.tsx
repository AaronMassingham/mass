import { useState, MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

//Types
import { DialogType } from "@typescriptTypes/CComponentTypes";

//Components
import Times from "../icons/Times";
import DefaultButton from "../buttons/Default";

//Styled Components
import { Container, ButtonContainer } from "@styles/styled-components/misc/Dialog";

//Create Portal
import { createPortal } from "@utils/createPortal";

//Animation
import { fadeInOutVariants, dialogVariants } from "@constants/FramerVariants";

const Dialog = ({
	children,
	showCloseBtnCondition,
	text,
	smallText,
	showDialog,
	hasOtherEvent,
}: DialogType) => {
	const [dialog] = useState(showDialog);

	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		hasOtherEvent && hasOtherEvent();
	};

	const content = dialog && (
		<Container {...fadeInOutVariants}>
			<motion.div layout="preserve-aspect">
				{text && <h2>{text}</h2>}
				{smallText && <p>{smallText}</p>}
				{children}
				<AnimatePresence>
					{showCloseBtnCondition && (
						<ButtonContainer>
							<motion.div {...dialogVariants}>
								<DefaultButton
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

	return createPortal(content);
};

export default Dialog;
