import React from "react";
import Navigation from "../UI/navigation/Navigation";
import EditedContent from "./EditedContent";

const links = [
	{ href: "/echanges", text: "Mes échanges" },
	{ href: "/retouches", text: "Photos retouchées" },
];

function EditedLayout() {
	return (
		<>
			<Navigation links={links} />
			<EditedContent />
		</>
	);
}

export default EditedLayout;
