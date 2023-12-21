import React from "react";
import Image from "next/image";
import productImage from "@/app/assets/camera_bag.jpg";

type ProductCardProps = {
	isOnSale: boolean;
	productID: number;
};

export default function ProductCard(props: ProductCardProps) {
	return (
		<div className="w-72">
			<div className="relative">
				<div className="w-72 h-72 bg-zinc-100 flex justify-center items-center rounded-lg hover:cursor-pointer group/card">
					<Image className="w-64 h-64 group-hover/card:scale-105 duration-500" src={productImage} alt="Product image" />
				</div>
				<div className="flex justify-between w-full items-end absolute bottom-0">
					<div className="px-4 py-2 bg-red-600 text-white font-bold">SALE!</div>
					{props.isOnSale ? (
						<div className="px-4 py-2 bg-red-600 text-center text-white font-bold flex flex-col">
							<span className="line-through font-normal text-red-300 text-sm">$99.00</span>
							<span className="text-lg">$49.90</span>
						</div>
					) : (
						<div className="px-4 py-2 text-lg bg-red-600 text-center text-white font-bold flex flex-col">$99.90</div>
					)}
				</div>
			</div>
			<div>
				<div className="text-lg font-bold mt-5 text-ellipsis">Product name</div>
				<p className="text-base truncate mb-2 ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse pariatur omnis molestiae molestias deserunt nostrum ab distinctio
					assumenda, ipsum cum et praesentium. Tenetur ex illum corporis, provident molestiae earum dolore!
				</p>
				<div className="flex justify-between mt-3">
					<button type="button" className="bg-red-600 p-3 text-white rounded">
						Add to cart
					</button>
					<button type="button" className="p-3 bg-neutral-800 text-white rounded">
						Buy now
					</button>
				</div>
			</div>
		</div>
	);
}
