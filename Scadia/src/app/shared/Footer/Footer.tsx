import React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="w-10/12 3xl:w-7/12 mx-auto gap-8 flex text-white pt-10 pb-10 font-extralight">
			<div className="w-1/3 relative">
				<div className="uppercase mb-1 font-thin">about scadia</div>
				<p className="font-extralight">
					Scadia is an e-commerce outdoor digital shop center, located in Israel - Tel Aviv. You can visit our contact page{" "}
					<Link href={"/about"} className="text-red-600 font-bold underline underline-offset-4">
						here
					</Link>
					.
				</p>
				<div className="bottom-0 absolute">© 2023 Scadia, designed by Din Eilie & Amit Elgabsi.</div>
			</div>
			<div className="gap-3">
				<div className="uppercase mb-1">clothes</div>
				<div className="flex flex-col gap-1">
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Jackets & Coats
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Hoodies
					</Link>
					<Link className="w-fit hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						T-Shirts
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Pants
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Underwear
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Hats, Gloves & Accessories
					</Link>
				</div>
			</div>
			<div className="gap-3">
				<div className="uppercase mb-1">bags</div>
				<div className="flex flex-col gap-1">
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Travel Bags
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Backpacks
					</Link>
					<Link className="w-fit hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Messenger Bags
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Camera Bags
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Suitcase
					</Link>
				</div>
			</div>
			<div className="gap-3">
				<div className="uppercase mb-1">shoes</div>
				<div className="flex flex-col">
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Hiking & Traveling
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Sports
					</Link>
					<Link className="w-fit hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Winter Boots
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Urban Shoes
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Leather Shoes
					</Link>
				</div>
			</div>
			<div className="gap-3">
				<div className="uppercase mb-1">camping</div>
				<div className="flex flex-col">
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Tents
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Mattresses
					</Link>
					<Link className="w-fit hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Knives
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						Cooking Equipment
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium w-fit" href="Navbar">
						All-in-one Tools
					</Link>
				</div>
			</div>
		</div>
	);
}
