import React from "react";
import Brand from "./components/Brand";
import Searchbar from "./components/Searchbar";

export default function Navbar() {
	return (
		<nav className="bg-neutral-800">
			<section className="p-5 flex justify-between 3xl:w-7/12 mx-auto">
				<Brand />
				<Searchbar />
			</section>
		</nav>
	);
}
