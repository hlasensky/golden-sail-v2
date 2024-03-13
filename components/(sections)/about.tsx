"use client";

import React, { useContext, useEffect, useRef } from "react";
import Spacer from "../spacer";
import Image from "next/image";
import { IndexContext } from "@/app/indexContext";
import useOnScreen from "@/hooks/onScreen";
import Balancer from "react-wrap-balancer";

function About() {
	const { setActiveSection } = useContext(IndexContext);
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useOnScreen(ref);

	useEffect(() => {
		if (isVisible) setActiveSection("about");
	}, [isVisible, setActiveSection]);

	return (
		<div id="about" className="mb-[15vh] sm:mb-[25vh] ">
			<Image
				src={"/backLines.svg"}
				layout="fill"
				objectFit="contain"
				objectPosition="left"
				alt=""
				className="-z-20 absolute !top-[70vh]"
			/>
			<h2
				className="flex flex-col items-center text-2xl sm:text-3xl md:text-5xl lg:text-7xl  "
				itemProp="name"
			>
				<p className="sm:mb-4 tracking-wide">o mně</p>
				<Spacer />
			</h2>
			<div className="mx-auto w-[70vw] sm:pl-6 text-base sm:text-2xl">
				<Balancer>
					Jmenuji se Tomáš Hlásenský a jsem student a webový tvůrce a designér
					<span className="text-gold">.</span> Neustále hledám nové zkušenosti a znalosti
					<span className="text-gold">,</span> které mohu zúročit v nových projektech
					<span className="text-gold">.</span> Mé silné stránky zahrnují chuť se posouvat
					dál
					<span ref={ref} className="text-gold">
						,
					</span>
					spolehlivost a snahu o dosažení cílů mých klientů
					<span className="text-gold">.</span>
					<br></br>
					<br></br>
					Mým hlavním zaměřením je vývoj webových stránek pomocí moderního frameworku Next
					<span className="text-gold">.</span>js<span className="text-gold">.</span> Tato
					technologie mi umožňuje efektivně vytvářet stránky s vylepšeným výkonem
					<span className="text-gold">,</span> SEO optimalizací a skvělým uživatelským
					zážitkem<span className="text-gold">.</span> I přesto
					<span className="text-gold">,</span> že pracuji i s jinými technologiemi
					<span className="text-gold">,</span> Next<span className="text-gold">.</span>js
					je pro mě klíčovým nástrojem<span className="text-gold">,</span> který mi
					umožňuje přinášet do každého projektu inovativní přístup
					<span className="text-gold">.</span>
				</Balancer>
			</div>
		</div>
	);
}

export default About;
