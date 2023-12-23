"use client";

export default function Home() {
	const handleClick = () => {};

	return (
		<div className="flex flex-col gap-24">
			<div className="flex flex-col md:flex-row justify-center items-center pt-10 gap-2 md:gap-12">
				<div className="mt-10">
					<img
						src="/amanda.jpg"
						alt="Amanda"
						width={300}
						className="rounded-full"
					/>
				</div>
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
						className="bg-red-600 text-white w-56 h-12 mt-4 m-auto rounded-full"
						onClick={handleClick}
					>
						View My Portfolio
					</button>
				</div>
			</div>
			<div className="flex flex-col items-center">
				<h2 className="text-white mb-4">A sample of my artwork.</h2>
				<div className="flex flex-wrap md:w-720!important justify-center gap-2 text-white">
					<div className="flex flex-col items-center">
						<img
							src="/wave-wash.jpg"
							alt="bubbles"
							width={300}
							className="border-2 border-solid border-white"
						/>
						<h2>Shoreline Wave</h2>
					</div>
					<div className="flex flex-col items-center">
						<img
							src="/lions.jpg"
							alt="lions"
							width={300}
							className="border-2 border-solid border-white"
						/>
						<h2>Lions in Love</h2>
					</div>

					<div className="flex flex-col items-center">
						<img
							src="/face.jpg"
							alt="face"
							width={300}
							className="border-2 border-solid border-white"
						/>
						<h2>Barely there</h2>
					</div>
					<div className="flex flex-col items-center">
						<img
							src="/trees.jpg"
							alt="trees"
							width={300}
							className="border-2 border-solid border-white"
						/>
						<h2>Trees in the Rainbow Mist</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
