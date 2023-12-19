import React from "react";
import Image from "next/image";
import logo from "@/app/assets/Scadia.svg"
export default function Brand() {
	return (
		<div className="text-4xl font-extrabold flex items-center gap-2 text-white">
			<Image src={logo} alt="Scadia logo." className="w-8 h-8" />
			Scadia
		</div>
	);
}
