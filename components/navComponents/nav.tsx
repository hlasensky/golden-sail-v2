"use client";

import { IndexContext } from "@/app/indexContext";
import Link from "next/link";
import React, { useContext } from "react";

export default function Nav() {
	const { activeSection } = useContext(IndexContext);

	const longLine = "bg-whiteBlue/50 h-20 w-[2px] rounded ";
	const shortLine = "bg-whiteBlue/50 h-10 w-[2px] rounded";
	const textNav = "sm:text-2xl [writing-mode:vertical-rl] transform -scale-100";
	return (
		<nav className="fixed sm:mr-2  h-[100svh]  right-0 flex flex-col justify-center items-center gap-4  py-[5%] top-1/2 -translate-y-1/2">
			<span className={longLine}></span>
			<div className={`${textNav} ${activeSection === "home" ? "" : "text-whiteBlue/50"}`}>
				<a title="Domů" target="_self" href="#home">
					domů
				</a>
			</div>
			<span className={shortLine}></span>
			<div className={`${textNav} ${activeSection === "about" ? " " : "text-whiteBlue/50"}`}>
				<a title="O mě" target="_self" href="#about">
					o&nbsp;mě
				</a>
			</div>
			<span className={shortLine}></span>
			<div
				className={`${textNav} ${activeSection === "projects" ? " " : "text-whiteBlue/50"}`}
			>
				<a title="Projekty" target="_self" href="#projects">
					projekty
				</a>
			</div>
			<span className={shortLine}></span>
			<div
				className={`${textNav} ${activeSection === "contact" ? " " : "text-whiteBlue/50"}`}
			>
				<a title="Kontakt" target="_self" href="#contact">
					kontakt
				</a>
			</div>
			<span className={longLine}></span>
		</nav>
	);
}
