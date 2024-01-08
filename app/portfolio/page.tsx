"use client";

import { useEffect } from "react";

const PortfolioPage = () => {
	useEffect(() => {
		let width = screen.width;
		let size = "";
		if (width > 1024) size = "5, 4";
		else if (width > 768) size = "5,3";
		else if (width > 500) size = "5,2";
		else size = "5, 1";
		const initScript = document.createElement("script");
		initScript.id = "rb-xzfcxvzx";
		initScript.innerHTML = `
        console.log('Initializing Redbubble portfolio');
        new RBExternalPortfolio('www.redbubble.com', 'amaleighart', ${size}).renderIframe();
        `;
		document.body.appendChild(initScript);

		const div = document.querySelector("iframe");
		if (div) {
			div!.style.margin = "auto";
		}

		initScript.onerror = () => {
			console.error("Error loading Redbubble external script");
		};

		return () => {
			if (initScript) {
				const iframe = document.querySelector("iframe");
				console.log("Unmounting...", iframe);
				if (iframe) {
					iframe.parentNode?.removeChild(iframe);
				}
			}
		};
	}, []);

	return (
		<div className="mt-20 text-white">
			<h1 className="text-4xl">My Portfolio</h1>
		</div>
	);
};

export default PortfolioPage;
