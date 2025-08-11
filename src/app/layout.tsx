import type { Metadata } from "next";
import "../styles/tailwind.scss";
import "../styles/index.scss";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

import { Inter } from "next/font/google";

const interFont = Inter({
	weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
	subsets: ["latin"],
});

const pageTitle = "Bazara Technology";

export const metadata: Metadata = {
	title: `%s | ${pageTitle}`,
	description: `${pageTitle} | Innovate`,
	keywords: ["Bazara"],
	robots: "index, follow",
	openGraph: {
		title: `%s | ${pageTitle}`,
		description: `${pageTitle} | Innovate`,
		siteName: "Bazara",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: `%s | ${pageTitle}`,
		description: `${pageTitle} | Innovate`,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<body className={`${interFont.variable} w-screen min-h-screen max-w-[100vw] bg-white font-sans`}>
				<Toaster position="top-center" />
				<div className="root">{children}</div>
			</body>
		</html>
	);
}
