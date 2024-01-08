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
				<div className="max-w-screen-lg m-auto px-4 pt-4">
					<NavBar />
					<div className="bg-gradient-to-b from-navy via-darkishBlue to-navy  mb-20 p-6">
						{children}
					</div>
					<div className="fixed bottom-0 w-full left-0 overflow-hidden flex justify-center items-center bg-black text-slate-500 h-14">
						&copy; copyright 2024
					</div>
				</div>
			</body>
		</html>
	);
}
