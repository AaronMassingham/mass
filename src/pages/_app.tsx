import type { AppProps } from "next/app";

//Components
import AppLayout from "@components/app/AppLayout";

//Global Styles
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppLayout>
			<Component {...pageProps} />
		</AppLayout>
	);
}
