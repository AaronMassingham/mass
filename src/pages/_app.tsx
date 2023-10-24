import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import { StyleSheetManager } from "styled-components";

//Hooks
import { useHydration } from "@hooks/useHydration";

//Components
import AppLayout from "@components/layout/AppLayout";

//Global Styles
import "../styles/globals.css";

//Constants
import { fadeInOutVariants } from "@constants/FramerVariants";

export default function App({ Component, pageProps, router }: AppProps) {
	const isHydrated = useHydration();

	return (
		<StyleSheetManager shouldForwardProp={() => true}>
			<AppLayout>
				<AnimatePresence mode="wait">
					<motion.div key={router.route} style={{ height: "100%" }} {...fadeInOutVariants}>
						{isHydrated && <Component isHydrated={isHydrated} {...pageProps} />}
					</motion.div>
				</AnimatePresence>
				{isHydrated && <div id="modal-container" />}
			</AppLayout>
		</StyleSheetManager>
	);
}
