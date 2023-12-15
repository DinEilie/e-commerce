import React from "react";

export default function Searchbar() {
	return (
		<div className="flex items-center">
			<input type="search" id="searchbar" placeholder="Search..." className="p-2 rounded-l" />
			<button type="button" className="p-2 bg-red-600 rounded-r">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					className="w-6 h-6 stroke-white ">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>
			</button>
		</div>
	);
}
