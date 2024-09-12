import About from "@/components/(sections)/about";
import Contact from "@/components/(sections)/contact";
import Home from "@/components/(sections)/home";
import Projects from "@/components/(sections)/projects";
import type { Person, WithContext } from "schema-dts";

export default function Index() {
	const jsonLd: WithContext<Person> = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Tomáš Hlásenský",
		url: "https://thlasensky.netlify.app/",
		sameAs: ["https://github.com/hlasensky"],
		jobTitle: "FreeLancer",
		worksFor: {
			"@type": "Organization",
			name: "THlasensky",
		},
		knowsAbout: ["Technology", "Software Development", "Web Development"],
		address: {
			"@type": "PostalAddress",
			addressLocality: "Brno",
			addressRegion: "Jihomoravský kraj",
			addressCountry: "Czech Republic",
		},
	};

	return (
		<main className="min-h-screen">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Home />
			<About />
			<Projects />
			<Contact />
		</main>
	);
}
