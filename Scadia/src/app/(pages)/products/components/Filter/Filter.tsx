import React from "react";
import Clothing from "./client/Clothing/Clothing";
import Bags from "./client/Bags/Bags";
import Shoes from "./client/Shoes/Shoes";
import Camping from "./client/Camping/Camping";
import Price from "./client/Price/Price";
import Brand from "./client/Brand/Brand";

export default function Filter() {
	return (
		<div>
			<div className="border border-b-0 bg-white p-5">
				<div className=" text-2xl font-bold">Categories</div>
				<div className="mt-5">
					<ul className="text-zinc-500">
						<Clothing />
						<Bags />
						<Shoes />
						<Camping />
					</ul>
				</div>
			</div>
			<div className="border bg-white p-5">
				<div className=" text-2xl font-bold">Filters</div>
				<div className="mt-5">
					<ul>
						<Brand />
						<Price />
					</ul>
				</div>
			</div>
		</div>
	);
}
