import Nav from "@/components/navComponents/nav";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/footerComponents/footer";
import { IndexContextProvider } from "./indexContext";

const mont = Montserrat({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
	title: "Portfolio - Tomáš Hlásenský - Tvorba Webových Stránek a Designu",
	description:
		"Vítejte na portfoliu Tomáše Hlásenského. Specializuji se na tvorbu webových stránek s důrazem na inovativní design. Prozkoumejte mé práce a projekty.",
	keywords: "Tomáš Hlásenský, webové stránky, design, portfolio, Next.js, tvorba webů",
	authors: {name:"Tomáš Hlásenský" },
	openGraph: {
		siteName: "Tworba webů Tomáš Hlásenský",
		title: "Portfolio - Tomáš Hlásenský - Tvorba Webových Stránek a Design",
		description:
			"Vítejte na portfoliu Tomáše Hlásenského. Specializuji se na tvorbu webových stránek s důrazem na inovativní design. Prozkoumejte mé práce a projekty.",
		type: "website",
		url: "https://thlasensky.netlify.app/", 
		images: "https://thlasensky.netlify.app/landing.png", 
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={mont.className + " bg-darkBlue text-whiteBlue "}>
				<IndexContextProvider>
					<Nav />
					{children}
					<Footer />
				</IndexContextProvider>
			</body>
		</html>
	);
}
