import React, { useEffect, useState } from "react";
import ProjectCard from "./projectCard";
import { Project, projects } from "@/lib/projects";
import Image from "next/image";

function ListProjectCard() {
	const [xy, setXy] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
	const [projectsF, setProjectsF] = useState(Object.keys(projects));
	const [filter, setFilter] = useState("");

	const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setXy({ x: Math.floor(e.clientX - rect.left), y: Math.floor(e.clientY - rect.top) });
	};

	useEffect(() => {
		if (filter) {
			const filteredProj = Object.keys(projects).filter(
				(proj: string) =>
					projects[Number(proj)].pins.filter((item) => item === filter).length
			);
			setProjectsF(filteredProj);
		} else setProjectsF(Object.keys(projects));
	}, [filter]);

	return (
		<>
			<div className="w-full flex flex-wrap justify-evenly my-4">
				<button className="text-2xl" onClick={() => setFilter("")}>
					{/* <Image alt="vše" src={""} width={30} height={30}/> */}
					vše
				</button>

				<button className="flex flex-col items-center" onClick={() => setFilter("dev")}>
					<Image alt="dev" src={"/icons/dev.svg"} width={30} height={30} />
					<span className="hidden sm:block">vyvinuté mnou</span>
				</button>
				<button className="flex flex-col items-center" onClick={() => setFilter("design")}>
					<Image alt="design" src={"/icons/design.svg"} width={30} height={30} />
					<span className="hidden sm:block">nadizajnované mnou</span>
				</button>
				<button
					className="flex flex-col items-center"
					onClick={() => setFilter("wordpress")}
				>
					<Image alt="wordpress" src={"/icons/wordpress.svg"} width={30} height={30} />
					<span className="hidden sm:block">wordpress</span>
				</button>
			</div>
			<div
				onMouseMove={handleMove}
				className="px-[13vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-row justify-center mb-[10vh]"
			>
				{projectsF.map((projectId: string) => {
					const id = Number(projectId);
					return <ProjectCard key={id} xy={xy} value={projects[id]} />;
				})}
			</div>
		</>
	);
}

export default ListProjectCard;
