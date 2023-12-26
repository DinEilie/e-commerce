import React from "react";
import NavbarDesktop from "./components/NavbarDesktop/NavbarDesktop";

export default function Navbar() {
	return (
		<nav className="fixed z-10 top-0 w-full">
			<NavbarDesktop />
		</nav>
	);
}
