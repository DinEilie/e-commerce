"use client";
import React from "react";
import Brand from "./components/Brand";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Searchbar from "./components/Searchbar";
import { useNavbarStore } from "@/app/stores/Navbar";

export default function NavbarDesktopTop() {
	const store = useNavbarStore();
	return (
		<div
			className="bg-neutral-900"
			onMouseEnter={() => {
				store.setShowClothing(false);
				store.setShowBags(false);
				store.setShowShoes(false);
				store.setShowCamping(false);
			}}>
			<div id="desktopTop" className="py-3 flex justify-between 3xl:justify-between w-10/12 3xl:w-7/12 mx-auto">
				<Brand />
				<Searchbar />
				<Login />
				<Cart />
			</div>
		</div>
	);
}
