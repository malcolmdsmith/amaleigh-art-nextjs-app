"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
	const [nav, setNav] = useState(false);

	const links = [
		{
			id: 1,
			link: "home",
			path: "/",
		},
		{
			id: 2,
			link: "about",
			path: "/about",
		},
		{
			id: 3,
			link: "portfolio",
			path: "/portfolio",
		},
		{
			id: 4,
			link: "contact",
			path: "/contact",
		},
		{
			id: 5,
			link: "admin",
			path: "/admin",
		},
	];

	return (
		<div className="flex justify-between items-center w-full h-20 px-2 bg-navy nav">
			<div className="bg-gradient-to-r from-darkgold via-lightgold to-darkgold">
				<div className="px-4 py-2 m-1 bg-navy">
					{/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
					<h1 className="text-4xl font-signature font-serif bg-gradient-to-r from-darkgold via-lightgold to-darkgold text-transparent bg-clip-text">
						<a
							className="link-underline link-underline-black"
							href=""
							target="_blank"
							rel="noreferrer"
						>
							Amaleigh Art
						</a>
					</h1>
				</div>
			</div>

			<ul className="hidden md:flex">
				{links.map(({ id, link, path }) => (
					<li
						key={id}
						className="nav-links px-4 cursor-pointer capitalize font-medium text-darkgold hover:scale-105 hover:text-white duration-200 link-underline"
					>
						<Link href={path}>{link}</Link>
					</li>
				))}
			</ul>

			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-2 z-10 text-darkgold md:hidden"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{nav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b bg-navy text-darkgold">
					{links.map(({ id, link, path }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-6 text-4xl"
						>
							<Link onClick={() => setNav(!nav)} href={path}>
								{link}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default NavBar;
