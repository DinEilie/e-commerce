"use client";
import { useNavbarStore } from "@/app/stores/Navbar";
import Link from "next/link";
import React from "react";

export default function Bags() {
	const store = useNavbarStore();
	return (
		<Link
			className={`${store.showBags ? "text-red-600 border-b border-red-600" : ""} focus-visible:text-red-600 py-4 pr-10 duration-200 font-medium`}
			href="Navbar"
			onMouseEnter={() => {
				if (store.showClothing || store.showCamping || store.showShoes) {
					store.setShowClothing(false);
					store.setShowShoes(false);
					store.setShowCamping(false);
					setTimeout(() => {
						store.setShowClothing(false);
						store.setShowShoes(false);
						store.setShowCamping(false);
						store.setShowBags(true);
					}, 160);
				} else {
					setTimeout(() => {
						store.setShowClothing(false);
						store.setShowShoes(false);
						store.setShowCamping(false);
						store.setShowBags(true);
					}, 160);
				}
			}}>
			<div className="flex gap-3 items-center">
				Bags
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
					<path
						fillRule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
		</Link>
	);
}
