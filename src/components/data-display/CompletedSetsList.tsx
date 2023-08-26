import React, { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";

//Types
import { Exercise, Set } from "@typescriptTypes/workoutTypes";

//Components
import NoData from "@components/data-display/NoData";
import CompletedSetsListItem from "@components/data-display/CompletedSetsListItem";
import Trash from "@components/icons/Trash";
import ScrollableContainer from "@components/wrappers/ScrollableContainer";
import StartLiftingImage from "@components/icons/StartLiftingImage";

//Constants
import { genericFadeOutVariants, listItemVariant } from "@constants/FramerVariants";

//Styled Components
import { Container } from "@styles/styled-components/data-display/CompleteSetsList";

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
						data.map((set, index) => (
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
						))
					) : (
						<NoData type="image" key="error" hasIcon={<StartLiftingImage />} />
					)}
				</AnimatePresence>
			</ScrollableContainer>
		</Container>
	);
};

type Props = {
	data: Set[];
	exerciseSets: Dispatch<SetStateAction<Exercise>>;
};

export default CompletedSetsList;
