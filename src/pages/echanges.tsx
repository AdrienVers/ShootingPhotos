import React from "react";
import Head from "next/head";
import ExchangeLayout from "../components/Echanges/ExchangeLayout";

function Echanges() {
	return (
		<>
			<Head>
				<title>Joseph Paris Visuals</title>
				<meta name="description" content="Joseph Paris Visuals" />
				<link rel="icon" href="/icon.ico" />
			</Head>
			<ExchangeLayout />
		</>
	);
}

export default Echanges;
