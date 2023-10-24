import { useState, MouseEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

//Types
import { DialogType } from "@typescriptTypes/ComponentTypes";

//Components
import Times from "../icons/Times";
import DefaultButton from "../buttons/Default";

//Styled Components
import { Container, ButtonContainer } from "@styles/styled-components/misc/Dialog";

//Animation
import { fadeInOutVariants, dialogVariants } from "@constants/FramerVariants";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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

	return (
		dialog &&
		createPortal(
			<Container className={`${inter.className}`} {...fadeInOutVariants}>
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
			</Container>,
			document.body
		)
	);
};

export default Dialog;
