import React from "react";
import Navigation from "../UI/navigation/Navigation";
import ShootingContent from "./ShootingContent";

const links = [
    { href: "/echanges", text: "Mes échanges" },
    { href: "/shooting", text: "Photos du shooting" }
];

function ShootingLayout() {
	return (
		<>
			<Navigation links={links} />
			<ShootingContent />
		</>
	);
}

export default ShootingLayout;
