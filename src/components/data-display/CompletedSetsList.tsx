import { AnimatePresence, motion } from "framer-motion";

//Types
import { CompletedSetsListType } from "@typescriptTypes/WorkoutTypes";

//Components
import NoData from "@components/data-display/NoData";
import CompletedSetsListItem from "@components/data-display/CompletedSetsListItem";
import Trash from "@components/icons/Trash";
import ScrollableContainer from "@components/wrappers/ScrollContainer";
import StartLiftingImage from "@components/icons/StartLiftingImage";

//Constants
//Constants
import { fadeInOutVariants } from "@constants/FramerVariants";

//Styled Components
import { Container } from "@styles/styled-components/data-display/CompleteSetsList";

const CompletedSetsList = ({ data, exerciseSets }: CompletedSetsListType) => {
	const handleSetDelete = (setId: number) => {
		exerciseSets((prevState) => ({
			...prevState,
			sets: prevState.sets.filter((set) => set.set_id !== setId),
		}));
	};

	const hasSets = data.length > 0;

	return (
		<Container $hasSets={hasSets} {...fadeInOutVariants}>
			<ScrollableContainer data={data}>
				<AnimatePresence mode="wait">
					{hasSets ? (
						<motion.div style={{ height: "100%" }}>
							<AnimatePresence>
								{data.map((set, index) => (
									<CompletedSetsListItem
										key={set.set_id.toString()}
										set_id={set.set_id}
										weight={set.weight}
										repetitions={set.repetitions}
										setNumber={index + 1}
									>
										<button onClick={() => handleSetDelete(set.set_id)}>
											<Trash />
										</button>
									</CompletedSetsListItem>
								))}
							</AnimatePresence>
						</motion.div>
					) : (
						<NoData type="image" key="error" hasIcon={<StartLiftingImage />} />
					)}
				</AnimatePresence>
			</ScrollableContainer>
		</Container>
	);
};

export default CompletedSetsList;
