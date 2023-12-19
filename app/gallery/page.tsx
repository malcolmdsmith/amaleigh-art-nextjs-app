import Image from "next/image";
import React from "react";

const Gallery = () => {
	const images = [
		{
			id: 1,
			src: "/bubbles.jpg",
			alt: "bubbles",
			description: "Bubbles of colorful water",
		},
		{ id: 2, src: "/flower.png", alt: "flower", description: "Rose flower" },
		{ id: 3, src: "/surf.jpg", alt: "surf", description: "Surf at sunset" },
		{ id: 4, src: "/wave.jpg", alt: "wave", description: "Blue waves" },
		{
			id: 5,
			src: "/bluelady_original.jpg",
			alt: "bluelady",
			description: "Blue lady inspired by Avatar",
		},
	];

	return (
		<>
			<h1 className="text-white mt-20 mb-2">Gallery</h1>
			<div className="flex flex-wrap">
				{images.map((image) => (
					<div
						key={image.id}
						className="flex flex-col mb-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2"
					>
						<img
							src={image.src}
							className="border-2 border-white border-solid"
						/>
						<h3 className="text-slate-300 mt-2 text-center">
							{image.description}
						</h3>
					</div>
				))}
			</div>
		</>
	);
};

export default Gallery;
