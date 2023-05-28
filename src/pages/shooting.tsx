import React from "react";
import Head from "next/head";
import ShootingLayout from "../components/Shooting/ShootingLayout";

function Shooting() {
	return (
		<>
			<Head>
				<title>Joseph Paris Visuals</title>
				<meta name="description" content="Joseph Paris Visuals" />
				<link rel="icon" href="/icon.ico" />
			</Head>
			<ShootingLayout />
		</>
	);
}

export default Shooting;
