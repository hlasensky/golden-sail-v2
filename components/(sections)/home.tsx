"use client"

import React, { useContext, useEffect, useRef } from "react";
import Spacer from "../spacer";
import Image from "next/image";
import useOnScreen from "@/hooks/onScreen";
import { IndexContext } from "@/app/indexContext";

function Home() {
	const { setActiveSection } = useContext(IndexContext);
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useOnScreen(ref);

	useEffect(() => {
		if (isVisible) setActiveSection("home");
	}, [isVisible, setActiveSection]);

	return (
		<div  id="home" className="min-h-[50vh] sm:min-h-[90vh] ">
			<Image
				className="m-[4vmin] w-14 h-14 sm:w-24 sm:h-24"
				src="/logo.svg"
				width={100}
				height={100}
				alt="logo"
			/>
			<h1
				ref={ref}
				className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl sm:pt-9 mx-auto w-[70vw]"
				itemProp="name"
			>
				<p className="sm:mb-4 tracking-wide">TOMÁŠ</p>
				<p className="tracking-wide">HLÁSENSKÝ</p>
				<Spacer />
				<p className="text-base sm:text-3xl">tvorba webů / web design</p>
			</h1>
			<Image
				className="absolute top-10 right-0 sm:top-[10vh] sm:right-[10vw] -z-10 w-[70vmin] h-[70vmin]"
				src="/mid-tri.svg"
				width={500}
				height={500}
				alt=""
			/>
		</div>
	);
}

export default Home;
