import React from "react";
import Image from "next/image";
import productImage from "@/app/assets/camera_bag.jpg";

type ProductCardProps = {
	isOnSale: boolean;
	productID: number;
};

export default function ProductCard(props: ProductCardProps) {
	return (
		<div className="w-80 border border-zinc-300 bg-white p-5">
			<div className="relative">
				<div className="w-full h-64 flex justify-center items-center hover:cursor-pointer group/card">
					<Image className="w-60 h-60 group-hover/card:scale-105 duration-500" src={productImage} alt="Product image" />
				</div>
				{props.isOnSale ? <span className="bg-red-600 py-2 px-5 -translate-x-5 -translate-y-5 text-white absolute top-0">Save 50%</span> : <></>}
			</div>
			<div>
				{props.isOnSale ? (
					<div className="flex gap-2 items-end my-3">
						<span className="text-xl font-semibold text-red-600">$49.90</span>
						<span className="line-through font-medium text-lg text-zinc-600">$99.00</span>
					</div>
				) : (
					<div className="text-xl my-3 font-semibold text-red-600">$49.90</div>
				)}
				<div className="text-lg font-bold text-ellipsis">Product name</div>
				<p className="text-base truncate mb-2 ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse pariatur omnis molestiae molestias deserunt nostrum ab distinctio
					assumenda, ipsum cum et praesentium. Tenetur ex illum corporis, provident molestiae earum dolore!
				</p>
				<div className="flex flex-col gap-2 mt-10">
					<button
						type="button"
						className="bg-red-600 shadow-lg hover:shadow-red-600/50 py-2 px-4 w-full text-white hover:bg-red-500 focus:bg-red-500 focus:outline-blue-800 focus:outline-double focus:outline-[10px] duration-300">
						Add to cart
					</button>
					<button
						type="button"
						className="bg-neutral-800 py-2 px-4 w-full text-white hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-blue-800 focus:outline-double focus:outline-[10px] duration-300">
						Buy now
					</button>
				</div>
			</div>
		</div>
	);
}
