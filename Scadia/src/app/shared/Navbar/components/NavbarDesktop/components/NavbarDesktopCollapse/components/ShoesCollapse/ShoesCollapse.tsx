"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "../shared/Card";
import imageShoes from "@/app/assets/hiking_shoes.jpg";
import imageWinter from "@/app/assets/snow_shoes.jpg";
import imageUrban from "@/app/assets/urban_shoes.jpg";
import { useNavbarStore } from "@/app/stores/Navbar";
export default function ShoesCollapse() {
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
		if (store.showShoes) show();
		else hide();
	}, [store.showShoes]);

	return (
		<div
			className={`${isHidden ? "hidden" : ""} ${isTransparent ? "opacity-0" : ""} shadow duration-150 z-0 relative bg-white -translate-y-1`}
			onMouseLeave={() => {
				store.setShowClothing(false);
				store.setShowBags(false);
				store.setShowShoes(false);
				store.setShowCamping(false);
			}}>
			<div className={`py-5 flex text-lg justify-between w-10/12 3xl:w-7/12 mx-auto`}>
				<div className="flex flex-col gap-3">
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Hiking & Traveling
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Sports
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Winter Boots
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Urban Shoes
					</Link>
					<Link className="hover:text-red-600 focus-visible:text-red-600 duration-200 font-medium" href="Navbar">
						Leather Shoes
					</Link>
				</div>
				<div className="flex gap-10">
					<Card title="Traveling" alt="A close up image of hiking shoes." description="Walk as long as ever." src={imageShoes} />
					<Card title="Snow" alt="Walking with huge snow boots." description="Best equipment during the cold days." src={imageWinter} />
					<Card title="Style" alt="A guy with a groovy shoes." description="Walk awesome on the street." src={imageUrban} />
				</div>
			</div>
		</div>
	);
}
