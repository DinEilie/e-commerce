"use client";
import React from "react";
import Brand from "./components/Brand/Brand";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Searchbar from "./components/Searchbar/Searchbar";
import { useNavbarStore } from "@/app/stores/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";

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
				<Newsletter />
				<Login />
				<Cart />
			</div>
		</div>
	);
}
