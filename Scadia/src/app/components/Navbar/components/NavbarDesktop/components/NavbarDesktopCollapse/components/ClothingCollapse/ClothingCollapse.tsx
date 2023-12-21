"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "../shared/Card";
import imageTshirt from "@/app/assets/hiking_tshirts.jpg";
import imagePants from "@/app/assets/hiking_pants.jpg";
import imageJacket from "@/app/assets/hiking_jackets.jpg";
import { useNavbarStore } from "@/app/stores/Navbar";
export default function ClothingCollapse() {
	const store = useNavbarStore();
	const [isTransparent, setIsTransparent] = useState<boolean>(true);
	const [isHidden, setIsHidden] = useState<boolean>(true);
	const show = () => {
		setIsHidden(false);
		setTimeout(() => {
			setIsTransparent(false);
		}, 10);
	};

	const hide = () => {
		setIsTransparent(true);
		setIsHidden(true);
	};

	useEffect(() => {
		if (store.showClothing) show();
		else hide();
	}, [store.showClothing]);

	return (
		<div
			className={`${isHidden ? "hidden" : ""} ${
				isTransparent ? "opacity-0" : ""
			} text-black shadow duration-150 z-0 relative bg-white -translate-y-1`}
			onMouseLeave={() => {
				store.setShowClothing(false);
				store.setShowBags(false);
				store.setShowShoes(false);
				store.setShowCamping(false);
			}}>
			<div className={`py-5 flex text-lg justify-between w-10/12 3xl:w-7/12 mx-auto`}>
				<div className="flex flex-col gap-3">
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Jackets & Coats
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Hoodies
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						T-Shirts
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Pants
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Underwears
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Hats, Gloves & Accessories
					</Link>
				</div>
				<div className="flex gap-10">
					<Card title="Pants" alt="People hiking with professional pants." description="For all kinds of terrain." src={imagePants} />
					<Card title="T-Shirts" alt="A man hiking with an orange shirt." description="Enjoy the simplicity of nature." src={imageTshirt} />
					<Card title="Jackets" alt="A couple wearing a warm jacket." description="Warm and dry in the winter." src={imageJacket} />
				</div>
			</div>
		</div>
	);
}
