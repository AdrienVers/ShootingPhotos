import React from "react";
import Navigation from "../UI/navigation/Navigation";
import ExchangeContent from "./ExchangeContent";
import ExchangeDescription from "./ExchangeDescription";

const links = [{ href: "/echanges", text: "Mes échanges" }];

function ExchangeLayout() {
	return (
		<>
			<Navigation links={links} />
			<ExchangeContent />
			<ExchangeDescription />
		</>
	);
}

export default ExchangeLayout;
