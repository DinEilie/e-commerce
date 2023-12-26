import React from "react";

export default function Searchbar() {
	return (
		<div className="flex items-center w-1/2">
			<input
				type="search"
				id="searchbar"
				placeholder="Search..."
				className="p-2 rounded-l h-full max-h-[40px] w-full text-sm border border-r-0 border-red-300"
			/>
			<select
				name="searchCategory"
				id="searchCategory"
				className="p-2 h-full max-h-[40px] bg-gray-100 border border-l-0 border-red-300 text-zinc-700 caret-red-600 text-sm">
				<option selected>All Categories</option>
				<optgroup label="Clothing">
					<option value="Jackets">Jackets</option>
					<option value="Hoodies">Hoodies</option>
					<option value="T-shirts">T-shirts</option>
					<option value="Pants">Pants</option>
					<option value="Underwears">Underwears</option>
					<option value="Accessories">Hats, Gloves & Accessories</option>
				</optgroup>
				<optgroup label="Bags">
					<option value="Travel">Travel Bags</option>
					<option value="Backpacks">Backpacks</option>
					<option value="Messenger">Messenger Bags</option>
					<option value="Camera">Camera Bags</option>
					<option value="Suitcases">Suitcases</option>
				</optgroup>
			</select>
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
