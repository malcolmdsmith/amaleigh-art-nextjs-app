import React from "react";
import Image from "next/image";

const AboutPage = () => {
	return (
		<div className="flex flex-col">
			<h2 className="text-white text-4xl  ml-8 mb-16 mt-20">
				About Amaleigh Art
			</h2>
			<div className="flex flex-col sm:flex-row gap-8">
				{/* <h2 className="text-white mb-2">About Amaleigh</h2> */}
				<Image
					className="m-auto"
					src="/amanda.jpg"
					alt="profile"
					width={350}
					height={350}
				/>
				<p className="text-white text-justify leading-8 sm:w-3/6 m-2">
					I am an Australian artist inspired by the essence of life&apos;s
					blessings all around us. I am fascinated by the light and reflection
					in the eyes of people and animals. I have always drawn faces recently
					having expanded into painting and exploring the colour play of the
					environment around us. Using mainly acrylics I am loving inks,
					watercolour and different ways of mixed media.
				</p>
			</div>
		</div>
	);
};

export default AboutPage;
