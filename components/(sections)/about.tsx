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
			<div className="mx-auto w-[70vw] text-justify sm:text-left sm:pl-6 text-base sm:text-2xl">
				<Balancer>
					Jsem Tomáš Hlásenský
					<span className="text-gold">
						<span className="text-gold">,</span>
					</span>{" "}
					vášnivý tvůrce webových stránek s vynikajícími komunikačními dovednostmi a
					pevným závazkem k dosahování vynikajících výsledků
					<span className="text-gold">.</span> Jako schopný a zodpovědný student hledám
					nové zkušenosti a znalosti<span className="text-gold">,</span> které mohu
					přinést do každého projektu<span className="text-gold">.</span>
					Mé dovednosti nejen spočívají v designu a tvorbě webových stránek
					<span ref={ref} className="text-gold">
						,
					</span>{" "}
					ale také v efektivní koncepci těchto stránek<span className="text-gold">,</span>{" "}
					aby plnily identitu a poslání projektů<span className="text-gold">,</span> na
					kterých pracuji
					<span className="text-gold">.</span> S radostí pracuji v týmu
					<span className="text-gold">,</span> kde sdílím své nápady a zároveň si užívám
					samostatnou práci<span className="text-gold">,</span> přičemž se vždy snažím
					překročit očekávání<span className="text-gold">.</span>
					Mým hlavním zaměřením je vývoj webových stránek pomocí moderního frameworku Next
					<span className="text-gold">.</span>js<span className="text-gold">.</span> Tato
					technologie mi umožňuje efektivně vytvářet stránky s vylepšeným výkonem
					<span className="text-gold">,</span> SEO optimalizací a skvělým uživatelským
					zážitkem<span className="text-gold">.</span> I přesto
					<span className="text-gold">,</span> že pracuji i s jinými technologiemi
					<span className="text-gold">,</span> Next<span className="text-gold">.</span>js
					je pro mě klíčovým nástrojem<span className="text-gold">,</span> který mi
					umožňuje přinášet do každého projektu inovativní přístup a zaručuje technickou
					excelenci<span className="text-gold">.</span>
					Buďte ujištěni<span className="text-gold">,</span> že vaše webové projekty budou
					mít nejen moderní a atraktivní design<span className="text-gold">,</span> ale
					také budou optimalizované pro vyhledávače<span className="text-gold">,</span>{" "}
					aby bylo dosaženo co nejlepší viditelnosti online
					<span className="text-gold">.</span> Se mnou získáte nejen zkušeného
					profesionála<span className="text-gold">,</span> ale také vášnivého
					spolupracovníka<span className="text-gold">,</span> který je ochoten přinést
					kreativní a inovativní přístup k vašim projektům
					<span className="text-gold">.</span>
				</Balancer>
			</div>
		</div>
	);
}

export default About;
