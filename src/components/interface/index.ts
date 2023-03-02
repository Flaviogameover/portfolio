export interface IProject {
	id: number;
	title: string;
	tech: string;
	description: string;
	image: string;
	links: {
		id?: number;
		url?: string;
		icon?: JSX.Element;
	}[];
}

export interface IProjects {
	projects: IProject[];
}

export interface ISkill {
	id: number;
	name: string;
	icon: JSX.Element;
}

export interface ISkills {
	skills: ISkill[];
}
