"use client";

import React, { useContext, useEffect, useRef } from "react";
import Spacer from "../spacer";
import Image from "next/image";
import { IndexContext } from "@/app/indexContext";
import useOnScreen from "@/hooks/onScreen";
import ListProjextCard from "../listProjextCard";

function Projects() {
	const { setActiveSection } = useContext(IndexContext);
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useOnScreen(ref);

	useEffect(() => {
		if (isVisible) setActiveSection("projects");
	}, [isVisible, setActiveSection]);

	return (
		<div id="projects" className="min-h-[90vh] ">
			<h2
				className="flex flex-col items-center text-2xl sm:text-3xl md:text-5xl lg:text-7xl  "
				itemProp="name"
			>
				<p ref={ref} className="sm:mb-4 tracking-wide">
					projekty
				</p>
				<Spacer />
			</h2>
			<ListProjextCard />
		</div>
	);
}

export default Projects;
