import React from "react";
import Clothing from "./client/Clothing/Clothing";
import Bags from "./client/Bags/Bags";
import Shoes from "./client/Shoes/Shoes";
import Camping from "./client/Camping/Camping";
import About from "./client/About/About";

export default function NavbarDesktopBottom() {
	return (
		<div className="bg-gray-100 border-b relative z-10">
			<div id="desktopBottom" className="text-lg text-black flex w-10/12 3xl:w-7/12 mx-auto gap-10">
				<Clothing />
				<Bags />
				<Shoes />
				<Camping />
				<About />
			</div>
		</div>
	);
}
