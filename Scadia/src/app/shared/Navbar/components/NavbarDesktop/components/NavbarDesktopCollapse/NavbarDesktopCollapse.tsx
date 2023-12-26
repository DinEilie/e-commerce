import React from "react";
import ClothingCollapse from "./components/ClothingCollapse/ClothingCollapse";
import BagsCollapse from "./components/BagsCollapse/BagsCollapse";
import ShoesCollapse from "./components/ShoesCollapse/ShoesCollapse";
import CampingCollapse from "./components/CampingCollapse/CampingCollapse";

export default function NavbarDesktopCollapse() {
	return (
		<div>
			<ClothingCollapse />
			<BagsCollapse />
			<ShoesCollapse />
			<CampingCollapse />
		</div>
	);
}
