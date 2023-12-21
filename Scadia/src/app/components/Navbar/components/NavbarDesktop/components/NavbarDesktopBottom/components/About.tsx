"use client";
import Link from "next/link";
import React from "react";

export default function About() {
	return (
		<Link
			className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium"
			href="Navbar"
			onMouseEnter={() => {
				console.log("HELLO");
			}}
			onMouseLeave={() => {
				console.log("BYE");
			}}>
			<div className="flex gap-3 items-center ">
				About Us
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
					<path
						fillRule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
		</Link>
	);
}
