import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";

//Components
import AppLayout from "@components/app/AppLayout";

//Global Styles
import "../styles/globals.css";

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<AppLayout>
			<AnimatePresence mode="wait">
				<motion.div
					key={router.route}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.35 }}
					style={{ height: "100%" }}
				>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</AppLayout>
	);
}
