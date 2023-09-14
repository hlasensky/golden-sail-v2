import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "./listProjextCard";
import { Balancer } from "react-wrap-balancer";

type Props = {
	value: Project;
};

function ProjectCard({ value }: Props) {
	return (
		<div className="mx-auto max-w-sm border  rounded-lg shadow bg-gray-800 border-gray-700">
			<Image
				className="rounded-t-lg w-full h-auto"
				width={500}
				height={400}
				src={value.imageUrl}
				alt=""
			/>
			<div className="p-5 ">
				<h4 className="mb-2 sm:text-2xl font-bold tracking-tight text-white">
					<Balancer>{value.title}</Balancer>
				</h4>
				<div className="rounded-3xl mt-2 mb-3 w-1/3 h-[1px] bg-gold"></div>
				<p className="text-sm sm:text-base mb-4 font-normal text-gray-400">
					<Balancer>{value.description}</Balancer>
				</p>
				<Link
					// href={`/projekt/${value.id}?value=${JSON.stringify(value)}`}
					href={value.url}
					target="_blank"
					rel="noopener noreferrer"
					className="transition-all inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lighterLighterBlue rounded-lg hover:bg-lighterLighterBlue/50 focus:ring-4 focus:outline-none focus:ring-blue-300 "
				>
					Podívat se na projekt
					<svg
						className="w-3.5 h-3.5 ml-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
}

export default ProjectCard;
