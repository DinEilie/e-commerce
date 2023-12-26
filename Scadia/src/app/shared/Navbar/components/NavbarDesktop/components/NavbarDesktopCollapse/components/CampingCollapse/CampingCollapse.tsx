"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "../shared/Card";
import imageEquipment from "@/app/assets/hiking_equipment.jpg";
import imageCamping from "@/app/assets/camping_tools.jpg";
import imageCooking from "@/app/assets/cooking_tools.jpg";
import { useNavbarStore } from "@/app/stores/Navbar";
export default function CampingCollapse() {
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
		if (store.showCamping) show();
		else hide();
	}, [store.showCamping]);

	return (
		<div
			className={`shadow ${isHidden ? "hidden" : ""} ${isTransparent ? "opacity-0" : ""} duration-150 z-0 relative bg-white -translate-y-1`}
			onMouseLeave={() => {
				store.setShowClothing(false);
				store.setShowBags(false);
				store.setShowShoes(false);
				store.setShowCamping(false);
			}}>
			<div className={`py-5 flex text-lg justify-between w-10/12 3xl:w-7/12 mx-auto`}>
				<div className="flex flex-col gap-3">
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Tents
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Mattresses
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Knives
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Cooking Tools
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						All-in-one Tools
					</Link>
				</div>
				<div className="flex gap-10">
					<Card
						title="Hiking Equipment"
						alt="Couple arrange their hiking equipment."
						description="For many years to come."
						src={imageEquipment}
					/>
					<Card title="Tents" alt="Many camping tools and tents." description="Home sweet home." src={imageCamping} />
					<Card title="Cooking Tools" alt="Pots and pans." description="Shakshouka was never testier." src={imageCooking} />
				</div>
			</div>
		</div>
	);
}
