"use client";
import React, { useState } from "react";

export default function Brand() {
	const [open, setOpen] = useState(false);
	return (
		<li>
			<button
				type="button"
				className={`${open ? "text-red-600" : ""} text-lg font-semibold items-center flex gap-5`}
				onClick={() => setOpen(!open)}>
				Brand
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className={`${open ? "-rotate-0" : "-rotate-180"} duration-200 w-5 h-5`}>
					<path
						fill-rule="evenodd"
						d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<div className={`${open ? "h-[216px]" : "h-0"} duration-200 ml-5 my-1 gap-2 flex flex-col overflow-hidden`}>
				<button className="hover:text-red-600 text-zinc-500 focus-visible:text-red-600 hover:cursor-pointer duration-200 items-center flex gap-3 font-medium w-fit">
					<input type="checkbox" className="border hover:cursor-pointer h-4 w-4 accent-red-500" />
					Adidas
				</button>
				<button className="hover:text-red-600 text-zinc-500 focus-visible:text-red-600 hover:cursor-pointer duration-200 items-center flex gap-3 font-medium w-fit">
					<input type="checkbox" className="border hover:cursor-pointer h-4 w-4" />
					The North Face
				</button>
				<button className="hover:text-red-600 text-zinc-500 focus-visible:text-red-600 hover:cursor-pointer duration-200 items-center flex gap-3 font-medium w-fit">
					<input type="checkbox" className="border hover:cursor-pointer h-4 w-4" />
					Puma
				</button>
				<button className="hover:text-red-600 text-zinc-500 focus-visible:text-red-600 hover:cursor-pointer duration-200 items-center flex gap-3 font-medium w-fit">
					<input type="checkbox" className="border hover:cursor-pointer h-4 w-4" />
					Columbia
				</button>
				<button className="hover:text-red-600 text-zinc-500 focus-visible:text-red-600 hover:cursor-pointer duration-200 items-center flex gap-3 font-medium w-fit">
					<input type="checkbox" className="border hover:cursor-pointer h-4 w-4" />
					Jack Wolfskin
				</button>
				<button className="hover:text-red-600 text-zinc-500 focus-visible:text-red-600 hover:cursor-pointer duration-200 items-center flex gap-3 font-medium w-fit">
					<input type="checkbox" className="border hover:cursor-pointer h-4 w-4" />
					Garmin
				</button>
				<button className="hover:text-red-600 text-zinc-500 focus-visible:text-red-600 duration-200 font-medium w-fit">View All</button>
			</div>
		</li>
	);
}
