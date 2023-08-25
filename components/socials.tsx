import Image from "next/image";
import Link from "next/link";
import React from "react";

function Socials({ icon, text, url }: { icon: string; text: string; url: string }) {
	return (
		<Link className="h-fit w-fit grid grid-flow-col justify-start gap-3 items-center text-sm sm:text-base" href={url} target="_blank" rel="noreferrer">
			<Image  width={30} height={30} alt={text} className="w-7 h-7 sm:w-10 sm:h-10 text-whiteBlue" src={icon} />
			<h3 className="text-sm sm:text-lg">{text}</h3>
		</Link>
	);
}

export default Socials;
