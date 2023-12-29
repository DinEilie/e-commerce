import React from "react";
import ClothingCollapse from "./client/ClothingCollapse/ClothingCollapse";
import BagsCollapse from "./client/BagsCollapse/BagsCollapse";
import ShoesCollapse from "./client/ShoesCollapse/ShoesCollapse";
import CampingCollapse from "./client/CampingCollapse/CampingCollapse";

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
