interface NavbarData {
	id: number;
	name: string;
	path: string;
    target : string;
}

export const NAVBAR_DATA: NavbarData[] = [
	{
		id: 1,
		name: "Galerie",
		path: "https://www.josephparisvisuals.com/galerie",
        target : "_blank",
	},
	{
		id: 2,
		name: "Vidéos",
		path: "https://www.josephparisvisuals.com/videos",
        target : "_blank",
	},
	{
		id: 3,
		name: "Design",
		path: "https://www.josephparisvisuals.com/designs",
        target : "_blank",
	},
	{
		id: 4,
		name: "Blog",
		path: "https://www.josephparisvisuals.com/blog",
        target : "_blank",
	},
	{
		id: 5,
		name: "Application",
		path: "/",
        target : "",
	},
	{
		id: 6,
		name: "Contact",
		path: "https://www.josephparisvisuals.com/contact",
        target : "_blank",
	},
];
