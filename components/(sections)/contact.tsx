"use client";

import React, { useContext, useEffect, useRef } from "react";
import Spacer from "../spacer";
import { IndexContext } from "@/app/indexContext";
import useOnScreen from "@/hooks/onScreen";
import Socials from "../socials";
import Email from "../email";

function Contact() {
	const { setActiveSection } = useContext(IndexContext);
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useOnScreen(ref);

	useEffect(() => {
		if (isVisible) setActiveSection("contact");
	}, [isVisible, setActiveSection]);

	return (
		<div id="contact" className="mb-[5vw]">
			<h2
				className="flex flex-col items-center text-2xl sm:text-3xl md:text-5xl lg:text-7xl  "
				itemProp="name"
			>
				<p className="sm:mb-4 tracking-wide">kontakt</p>
				<Spacer />
			</h2>
			<div ref={ref} className="w-[70vw] mx-auto gap-5 grid sm:grid-cols-2">
				<div className="flex gap-3 flex-col justify-evenly ">
					<Socials
						title="Email"
						icon={"./email.svg"}
						text={"tomas.hlasensky@seznam.cz"}
						url={"mailto: tomas.hlasensky@seznam.cz"}
					/>
					<Socials
						title="Github"
						icon={"./github.svg"}
						text={"hlasensky"}
						url={"https://github.com/hlasensky"}
					/>
					<Socials
						title="LinkedIn"
						icon={"./linkedin.svg"}
						text={"Tomáš Hlásenský"}
						url={
							"https://www.linkedin.com/in/tom%C3%A1%C5%A1-hl%C3%A1sensk%C3%BD-36572a215/"
						}
					/>
					<Socials
						title="IČO"
						icon={"./file.svg"}
						text={"IČ: 17395429"}
						url={"https://apl.czso.cz/res/detail?ico=17395429"}
					/>
					<Socials
						title="Zapsán"
						icon={"./file.svg"}
						text={
							"Fyzická osoba zapsaná v Živnostenském rejstříku u Městského úřadu Vyškov od 3. 8. 2022"
						}
						url={"https://apl.czso.cz/res/detail?ico=17395429"}
					/>
				</div>
				<Email />
			</div>
		</div>
	);
}

export default Contact;
