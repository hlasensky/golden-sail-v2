export type Project = {
	imageUrl: string;
	url: string;
	title: string;
	description: string;
	pins: string[];
};

type ProjectsObj = {
	[key: number]: Project;
};

export const projects: ProjectsObj = {
	1: {
		imageUrl: "/projects/foto-kalendare.png",
		url: "https://vytvor-kalendar.cz/",
		title: "Vytvořte si fotokalendář online",
		pins: ["dev"],
		description:
			"Webová aplikace na tvorbu fotokalendářů pro firmu Production co. vytvořená za pomocí Next js, Prisma a Typescriptu. S grafickým návrhem od firmy Production co.",
	},
	2: {
		imageUrl: "/projects/scervinka.png",
		url: "https://scervinka.cz/",
		title: "Stavební firma Stanislav Červinka",
		pins: ["dev", "design"],
		description: "Tvorba designu a development stránek v Next js pro stavební firmu.",
	},
	3: {
		imageUrl: "/projects/autaodhonzy.png",
		url: "https://www.autaodhonzy.cz/",
		title: "Designový web pro dovozce aut",
		pins: ["wordpress", "design"],
		description:
			"autaodhonzy.cz je velmi disignově zaměřený web, postavený na Divi, na kterém jsem spolupracoval a vytvářel webu design.",
	},
	4: {
		imageUrl: "/projects/kajukenbo.png",
		url: "https://kajukenboczech.cz/",
		title: "Stránka pro bojové umění Kajukenbo",
		pins: ["dev"],
		description:
			"Stránky pro český spolek bojového umění kajukenbo, s administrátorským prostředím a dynamickým generováním obsahu.",
	},
	5: {
		imageUrl: "/projects/seaview.png",
		url: "https://seaviewmandre.cz/",
		title: "Seaview Mandre - Chorvatsko",
		pins: ["dev"],
		description:
			"Web pro pronájem apartmánů v Chorvatsku, s rezervačním systémem a administrátorským prostředím.",
	},
	6: {
		imageUrl: "/projects/7ma.png",
		url: "https://7ma.cz/",
		title: "7ma.cz solární systémy a fotovoltaiky",
		pins: ["dev"],
		description:
			"Web pro společnost 7ma, s.r.o. s e-shopem s grafickými podklady od grafika z firmy Kapsi.",
	},
};
