import React from "react";
import image from "@/app/assets/hiking_boots.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Thanks() {
	return (
		<div className="w-10/12 3xl:w-7/12 mx-auto gap-10 font-semibold mt-40 justify-between flex pb-20">
			<div className="w-1/2 overflow-hidden rounded-3xl">
				<Image src={image} alt="Thank you picture." className="w-fit" />
			</div>
			<div className="w-1/2 flex flex-row items-center">
				<div>
					<div className="text-3xl font-bold py-2">Why choosing us?</div>
					<p className="text-lg leading-7 mb-5 text-zinc-600 font-normal">
						At <span className="font-extrabold tracking-wider">Scadia</span>, Elevate Your Outdoor Experience with ours unrivaled expertise and
						premium selection! Discover the top reasons to make us your go-to destination for Hiking, camping, and outdoor gear. From quality
						products to exceptional service, we're your trusted partner in every adventure.
					</p>
					<Link href={"/products"} className="bg-red-600 rounded hover:bg-red-500 py-2 px-4 text-white duration-300">
						Shop now
					</Link>
				</div>
			</div>
		</div>
	);
}
