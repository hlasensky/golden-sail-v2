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
				<p className="sm:mb-4 tracking-wide">o mě</p>
				<Spacer />
			</h2>
			<div className="mx-auto w-[70vw] text-justify sm:text-left sm:pl-6 text-sm sm:text-2xl" ref={ref}>
				<Balancer>
					Jmenuji se <b>Tomáš Hlásenský</b> a věnuji se tvorbě webových stránek
					<span className="text-gold">.</span> Jsem schopný a zodpovědný student, který
					touží po nových zkušenostech a znalostech<span className="text-gold">.</span>
					Mám vynikající komunikační dovednosti
					<span className="text-gold">,</span> jsem pracovitý a zároveň nezávislý
					<span className="text-gold">.</span> Rád pracuji v týmu
					<span className="text-gold">,</span> ale stejně tak si užívám práci na vlastní
					pěst<span className="text-gold">.</span>
					Mé dovednosti nejenže spočívají v designu a tvorbě stránek
					<span className="text-gold">,</span> ale také v schopnosti tyto stránky
					efektivně koncipovat<span className="text-gold">,</span> tak aby korespondovaly
					s identitou a posláním projektů<span className="text-gold">,</span> na kterých
					pracuji<span className="text-gold">.</span> S vášní ke každému projektu
					přistupuji<span className="text-gold">,</span> s cílem nejen splnit očekávání
					<span className="text-gold">,</span> ale překročit je
					<span className="text-gold">.</span>
				</Balancer>
			</div>
		</div>
	);
}

export default About;
