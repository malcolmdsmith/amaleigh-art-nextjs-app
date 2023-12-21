"use client";

export default function Home() {
	const handleClick = () => {};

	return (
		<div className="flex flex-col gap-24">
			<div className="flex justify-center pt-10 gap-16">
				<div className="flex flex-col mt-16">
					<h1 className="text-5xl font-thin text-white">Welcome, I&apos;m</h1>
					<h1 className="text-5xl font-thin text-white italic">
						Amanda Elwell
					</h1>
					<h2 className="text-white w-80">
						I am an artist that sells my art. I use mainly acrylics, watercolour
						and different ways of mixed media. You can order my art designs in
						many different forms, checkout my portfolio page for designs.
					</h2>
					<button
						className="bg-red-600 text-white w-56 h-12 mt-4 rounded-full"
						onClick={handleClick}
					>
						View My Portfolio
					</button>
				</div>
				<div className="mt-10">
					<img
						src="/amanda.jpg"
						alt="Amanda"
						width={300}
						className="rounded-full"
					/>
				</div>
			</div>
			<div className="flex flex-col items-center">
				<h2 className="text-white mb-4">A sample of my artwork.</h2>
				<div className="flex flex-wrap gap-4 w-2/3 m-auto">
					<img
						src="/wave-wash.jpg"
						alt="bubbles"
						width={300}
						className="border-2 border-solid border-white"
					/>
					<img
						src="/lions.jpg"
						alt="lions"
						width={300}
						className="border-2 border-solid border-white"
					/>

					<img
						src="/face.jpg"
						alt="face"
						width={300}
						className="border-2 border-solid border-white"
					/>
					<img
						src="/trees.jpg"
						alt="trees"
						width={300}
						className="border-2 border-solid border-white"
					/>
				</div>
			</div>
		</div>
	);
}
