import React from "react";
import NavbarDesktopTop from "./components/NavbarDesktopTop/NavbarDesktopTop";
import NavbarDesktopBottom from "./components/NavbarDesktopBottom/NavbarDesktopBottom";
import NavbarDesktopCollapse from "./components/NavbarDesktopCollapse/NavbarDesktopCollapse";

export default function NavbarDesktop() {
	return (
		<div>
			{/* Top navbar including searchbox and brand logo */}
			<NavbarDesktopTop />
			{/* Bottom navbar including shop products */}
			<NavbarDesktopBottom />
			{/* Hidden navbar that collapse on hover */}
			<NavbarDesktopCollapse />
		</div>
	);
}
