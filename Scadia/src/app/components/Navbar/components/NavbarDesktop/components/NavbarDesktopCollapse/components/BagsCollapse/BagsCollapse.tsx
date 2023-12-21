"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "../shared/Card";
import imageBag from "@/app/assets/hiking_bag.jpg";
import imageBagpack from "@/app/assets/hiking_bagpack.jpg";
import imageCamera from "@/app/assets/camera_bag.jpg";
import { useNavbarStore } from "@/app/stores/Navbar";
export default function BagsCollapse() {
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
		if (store.showBags) show();
		else hide();
	}, [store.showBags]);

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
						Travel Bags
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Backpacks
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Messenger Bags
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Camera Bags
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Suitcases
					</Link>
				</div>
				<div className="flex gap-10">
					<Card title="Students Bags" alt="A female student enjoys her bag." description="Plenty of room for many books." src={imageBag} />
					<Card
						title="Hiking Bagpacks"
						alt="A man hiking with a big bagpack."
						description="Store and carry all of your wares with you."
						src={imageBagpack}
					/>
					<Card
						title="Cameras Suitcases"
						alt="A camera with its suitcase."
						description="High durability and shock resistance."
						src={imageCamera}
					/>
				</div>
			</div>
		</div>
	);
}
