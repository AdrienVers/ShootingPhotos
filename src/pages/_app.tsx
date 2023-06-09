import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}
