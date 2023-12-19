import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Amaleigh Art",
	description: "Web site for Amaleigh Art Gallery.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<script
					async
					src="https://www.redbubble.com/assets/external_portfolio.js"
				/>
			</head>
			<body className={inter.className}>
				<div className="max-w-screen-lg m-auto">
					<NavBar />
					<div className="bg-gradient-to-b from-navy via-darkishBlue to-navy   p-6">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
