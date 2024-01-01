"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Camping() {
	const [open, setOpen] = useState(false);
	return (
		<li>
			<button
				type="button"
				className={`${open ? "text-red-600" : ""} text-lg font-semibold items-center flex gap-5`}
				onClick={() => setOpen(!open)}>
				Camping
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
				<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
					Tents
				</Link>
				<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
					Mattresses
				</Link>
				<Link className="w-fit hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
					Knives
				</Link>
				<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
					Cooking Equipment
				</Link>
				<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
					All-in-one Tools
				</Link>
				<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
					View All
				</Link>
			</div>
		</li>
	);
}
