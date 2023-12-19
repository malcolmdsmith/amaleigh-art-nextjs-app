import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				darkgold: "rgb(171,132,81)",
				lightgold: "rgb(245,238,174)",
				navy: "rgb(4,22,57)",
				darkishBlue: "darkblue",
			},
		},
	},
	plugins: [],
};
export default config;
