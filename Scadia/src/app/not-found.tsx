import React from "react";
import Image from "next/image";
import logo from "@/app/assets/Scadia.svg";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="h-[70vh] overflow-hidden flex items-center justify-center">
			<div className="flex flex-col items-center gap-5 justify-center bg-white p-20 border rounded">
				<div className="flex gap-4 items-center">
					<Image src={logo} alt="Scadia logo." className="w-16" />
					<div className="text-3xl font-bold">
						<span className="decoration-red-600 underline decoration-dashed">Oops!</span> we couldn't found this page.
					</div>
				</div>
				<Link href={"/"} className="text-center w-fit text-xl bg-red-600 hover:bg-red-500 duration-300 px-4 py-2 text-white rounded font-medium">
					Take me home
				</Link>
			</div>
		</div>
	);
}
