import Image from "next/image";
import React from "react";
import clothingImage from "@/app/assets/Clothing_Image.jpg";
import bagsImage from "@/app/assets/Bags_Image.jpg";
import shoesImage from "@/app/assets/Shoes_Image.jpg";
import campingImage from "@/app/assets/Camping_Image.jpg";

export default function Categories() {
	return (
		<div className="w-10/12 3xl:w-7/12 mx-auto font-semibold">
			<div className="mt-40 mb-10 text-xl justify-between flex items-center">
				<span className="text-2xl font-bold">Shop by category</span>
			</div>
			<div className="flex items-center gap-4">
				<div className=" bg-slate-500 group/scale relative text-white overflow-hidden w-1/2 h-[490px] rounded-3xl">
					<Image
						src={bagsImage}
						alt="Shop by clothing."
						className="w-fit brightness-75 saturate-75 duration-[2s] group-hover/scale:cursor-pointer group-hover/scale:scale-110 group-hover/scale:saturate-100 group-hover/scale:brightness-110"
					/>
					<div className="py-2 px-4 bg-red-600/80 group-hover/scale:bg-red-500/80 duration-1000 absolute bottom-0 text-xl rounded-tr-3xl">
						Bags
					</div>
				</div>
				<div className="text-white flex flex-col gap-4 w-1/2 h-[490px]">
					<div className="text-white relative overflow-hidden rounded-3xl h-[245px] group/scale">
						<Image
							src={clothingImage}
							alt="Shop by clothing."
							className="w-fit brightness-75 saturate-50 duration-[2s] group-hover/scale:cursor-pointer hover:scale-110 hover:saturate-100 hover:brightness-110 -translate-y-[12.5%]"
						/>
						<div className="py-2 px-4 bg-red-600/80 group-hover/scale:bg-red-500/80 duration-1000 absolute bottom-0 text-xl rounded-tr-3xl">
							Clothing
						</div>
					</div>
					<div className="text-white overflow-hidden gap-4 flex">
						<div className="text-white overflow-hidden relative rounded-3xl group/scale">
							<Image
								src={shoesImage}
								alt="Shop by clothing."
								className="w-fit brightness-75 saturate-50 duration-[2s] group-hover/scale:cursor-pointer hover:scale-110 hover:brightness-110 hover:saturate-100"
							/>
							<div className="py-2 px-4 bg-red-600/80 group-hover/scale:bg-red-500/80 duration-1000 absolute bottom-0 text-xl rounded-tr-3xl">
								Shoes
							</div>
						</div>
						<div className="rounded-3xl relative text-white overflow-hidden group/scale">
							<Image
								src={campingImage}
								alt="Shop by clothing."
								className="w-fit brightness-75 saturate-50 duration-[2s] group-hover/scale:cursor-pointer hover:scale-110 hover:brightness-110 hover:saturate-100"
							/>
							<div className="py-2 px-4 bg-red-600/80 group-hover/scale:bg-red-500/80 duration-1000 absolute bottom-0 text-xl rounded-tr-3xl">
								Camping
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
