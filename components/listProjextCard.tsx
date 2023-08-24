import React, { useEffect, useState } from "react";
import ProjectCard from "./projectCard";

export type Project = {
	id: string;
	imageUrl: string;
	url: string;
	title: string;
	description: string;
};

type ProjectsObj = {
	[key: string]: Project;
};

function ListProjectCard() {
	const [projects, setProjects] = useState<ProjectsObj>({});

	useEffect(() => {
		const fetchProjects = async () => {
			const res = await fetch("/api/projects", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const { data }: { data: ProjectsObj } = await res.json();

			if (res.status === 200) setProjects(data);
		};
		fetchProjects();
	}, []);

	return (
		<div className="px-[13vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-row justify-center mb-[10vh]">
			{Object.keys(projects).map((projectId: string) => {
                const id = Number(projectId);
				return (
					<ProjectCard
                        key={id}
                        value={projects[id]}
					/>
				);
			})}
		</div>
	);
}

export default ListProjectCard;
