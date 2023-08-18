import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

//Types
import { Exercise, Set } from "@typescriptTypes/workoutTypes";

//Components
import NoData from "@components/data-display/NoData";
import CompletedSetsListItem from "@components/data-display/CompletedSetsListItem";
import Trash from "@components/icons/Trash";

//Constants
import { genericFadeOutVariants, listItemVariant } from "@constants/FramerVariants";
import ScrollableContainer from "@components/wrappers/ScrollableContainer";
import StartLifting from "@components/icons/StartLifting";

type Props = {
	data: Set[];
	exerciseSets: Dispatch<SetStateAction<Exercise>>;
};

const CompletedSetsList = ({ data, exerciseSets }: Props) => {
	const handleSetDelete = (setId: number) => {
		exerciseSets((prevState) => ({
			...prevState,
			sets: prevState.sets.filter((set) => set.set_id !== setId),
		}));
	};

	const hasSets = data.length !== 0;

	return (
		<Container $hasSets={hasSets} {...genericFadeOutVariants}>
			<ScrollableContainer data={data}>
				<AnimatePresence mode="wait">
					{hasSets ? (
						<AnimatePresence>
							{data.map((set, index) => (
								<motion.div
									layout
									key={set.set_id.toString()}
									style={{ height: "20%", display: "flex" }}
									transition={{
										layout: {
											duration: 0.25,
										},
									}}
									{...listItemVariant}
								>
									<CompletedSetsListItem
										set_id={set.set_id}
										weight={set.weight}
										repetitions={set.repetitions}
										setNumber={index + 1}
									>
										<button onClick={() => handleSetDelete(set.set_id)}>
											<Trash />
										</button>
									</CompletedSetsListItem>
								</motion.div>
							))}
						</AnimatePresence>
					) : (
						<NoData type="image" key="error" hasIcon={<StartLifting />} />
					)}
				</AnimatePresence>
			</ScrollableContainer>
		</Container>
	);
};

interface ContainerProps {
	$hasSets: boolean;
}

const Container = styled(motion.div)<ContainerProps>`
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	position: relative;
	flex: 1;
	gap: 1rem;
	& strong {
		color: var(--brand500);
	}
	& button {
		width: 1rem;
	}
	&:before {
		position: absolute;
		top: 2rem;
		bottom: 0;
		width: 1px;
		background: var(--gray700);
		content: "";
		left: 50%;
		transform: translateX(-0.5px);

		${(props) =>
			props.$hasSets
				? `
			opacity:1;
			transition: opacity 1s ease 1s;
		`
				: `
		opacity:0;
		transition: opacity .5s ease 0s;`}

`;

export default CompletedSetsList;
