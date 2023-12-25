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
	icons: [
		{rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes:"180x180"},
		{rel: "icon", url: "/favicon-32x32.png", sizes:"32x32"},
		{rel: "icon", url: "/favicon-16x16.png", sizes:"16x16"},
		{rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5"},
	],
	manifest: "/site.webmanifest",
	themeColor: "#000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
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
