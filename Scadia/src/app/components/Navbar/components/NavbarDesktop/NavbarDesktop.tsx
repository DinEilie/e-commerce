import React from "react";
import NavbarDesktopTop from "./components/NavbarDesktopTop/NavbarDesktopTop";
import NavbarDesktopBottom from "./components/NavbarDesktopBottom/NavbarDesktopBottom";
import NavbarDesktopCollapse from "./components/NavbarDesktopCollapse/NavbarDesktopCollapse";

export default function NavbarDesktop() {
	return (
		<div>
			<NavbarDesktopTop />
			<NavbarDesktopBottom />
			<NavbarDesktopCollapse />
		</div>
	);
}
