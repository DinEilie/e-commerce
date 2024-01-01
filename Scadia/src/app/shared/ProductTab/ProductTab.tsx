"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import productImage from "@/app/assets/camera_bag.jpg";
import Link from "next/link";
import { ProductSizeType } from "@/app/types/productSize";

type ProductTabProps = {
	productID: number;
	productName: string;
	productDescription: string;
	isOnSale: boolean;
	productPrice: number;
	productSalePrice: number;
	productSaleDiscount: number;
	hasSmallSize: boolean;
	hasMediumSize: boolean;
	hasLargeSize: boolean;
	hasXLargeSize: boolean;
	productSmallQuantity: number;
	productMediumQuantity: number;
	productLargeQuantity: number;
	productXLargeQuantity: number;
	productQuantity: number;
	productCategory: string;
	productBrand: string;
	productImageURL: StaticImageData;
};

export default function ProductTab(props: ProductTabProps) {
	const [selectedSize, setSelectedSize] = useState<ProductSizeType>("none");

	function viewCurrentStock(): number {
		switch (selectedSize) {
			case "XL":
				return props.productXLargeQuantity;
			case "L":
				return props.productLargeQuantity;
			case "M":
				return props.productMediumQuantity;
			case "S":
				return props.productSmallQuantity;
			case "none":
				return props.productQuantity;
		}
	}
	return (
		<div className="border-b bg-white p-5 flex items-center justify-between">
			<div className="relative w-fit">
				<Link href={`/shop/product/${props.productID}`} className="w-64 h-64 flex justify-center items-center hover:cursor-pointer group/card">
					<Image className="w-60 h-60 group-hover/card:scale-105 duration-500" src={productImage} alt="Product image" />
				</Link>
				{props.isOnSale ? (
					<span className="bg-red-600 py-2 px-5 -translate-x-5 -translate-y-5 text-white absolute top-0">Save {props.productSaleDiscount}%</span>
				) : (
					<></>
				)}
			</div>
			<div className="w-1/2 flex flex-col gap-5">
				{props.isOnSale ? (
					<div className="flex gap-2 items-center my-3">
						<span className="text-xl font-semibold text-red-600">${props.productSalePrice}</span>
						<span className="line-through font-medium text-lg text-zinc-600">${props.productPrice}</span>
						<ul className="font-medium list-disc ml-5">
							{props.productQuantity > 0 ? (
								<li className="text-green-600">{`${selectedSize !== "none" ? "Currently," : "In total,"} ${viewCurrentStock()} in stock`}</li>
							) : (
								<li className="text-red-600">
									This product is currently <span className="underline">out of stock</span>
								</li>
							)}
						</ul>
					</div>
				) : (
					<div className="text-xl my-3 font-semibold text-red-600 flex gap-2">
						<div>${props.productPrice} </div>
						<ul className="text-green-600 font-medium text-base list-disc ml-5">
							{props.productQuantity > 0 ? (
								<li className="text-green-600">{`${selectedSize !== "none" ? "Currently," : "In total,"} ${viewCurrentStock()} in stock`}</li>
							) : (
								<li className="text-red-600">
									This product is currently <span className="underline">out of stock</span>
								</li>
							)}
						</ul>
					</div>
				)}
				<div>
					<div className="flex justify-between">
						<Link href={`/shop/product/${props.productID}`} className="text-lg font-bold text-ellipsis">
							{props.productName}
						</Link>
						<div></div>
					</div>
					<p className="text-base mb-2 max-h-20 overflow-y-auto w-3/4">{props.productDescription}</p>
				</div>

				<div className="flex gap-1 text-sm">
					{props.hasSmallSize ? (
						<button
							onClick={() => {
								if (selectedSize === "S") setSelectedSize("none");
								else setSelectedSize("S");
							}}
							disabled={props.productSmallQuantity < 1}
							className={`border border-zinc-300 rounded-sm text-neutral-500 ${selectedSize === "S" ? "bg-neutral-300" : ""} ${
								props.productSmallQuantity > 0 ? "hover:bg-neutral-300" : " bg-red-200 line-through cursor-not-allowed"
							} w-8 h-8`}>
							S
						</button>
					) : (
						<></>
					)}
					{props.hasMediumSize ? (
						<button
							onClick={() => {
								if (selectedSize === "M") setSelectedSize("none");
								else setSelectedSize("M");
							}}
							disabled={props.productMediumQuantity < 1}
							className={`border border-zinc-300 rounded-sm text-neutral-500 ${selectedSize === "M" ? "bg-neutral-300" : ""} ${
								props.productMediumQuantity > 0 ? "hover:bg-neutral-300" : " bg-red-200 line-through cursor-not-allowed"
							} w-8 h-8`}>
							M
						</button>
					) : (
						<></>
					)}
					{props.hasLargeSize ? (
						<button
							onClick={() => {
								if (selectedSize === "L") setSelectedSize("none");
								else setSelectedSize("L");
							}}
							disabled={props.productLargeQuantity < 1}
							className={`border border-zinc-300 rounded-sm text-neutral-500 ${selectedSize === "L" ? "bg-neutral-300" : ""} ${
								props.productLargeQuantity > 0 ? "hover:bg-neutral-300" : " bg-red-200 line-through cursor-not-allowed"
							} w-8 h-8`}>
							L
						</button>
					) : (
						<></>
					)}
					{props.hasXLargeSize ? (
						<button
							onClick={() => {
								if (selectedSize === "XL") setSelectedSize("none");
								else setSelectedSize("XL");
							}}
							disabled={props.productXLargeQuantity < 1}
							className={`border border-zinc-300 rounded-sm text-neutral-500 ${selectedSize === "XL" ? "bg-neutral-300" : ""} ${
								props.productXLargeQuantity > 0 ? "hover:bg-neutral-300" : " bg-red-200 line-through cursor-not-allowed"
							} w-8 h-8`}>
							XL
						</button>
					) : (
						<></>
					)}
				</div>
			</div>
			<div className="flex flex-col items-center gap-2 mt-10">
				<button
					type="button"
					className="bg-red-600 py-2 px-4 w-full text-white hover:bg-red-500 focus:bg-red-500 focus:outline-blue-800 focus:outline-double focus:outline-[10px] duration-300">
					Add to cart
				</button>
				<Link
					href={`/shop/product/${props.productID}`}
					className="py-2 font-semibold px-4 w-full text-neutral-500 border border-neutral-700 hover:bg-neutral-700 hover:border-neutral-800 hover:text-white focus:outline-blue-800 focus:outline-double focus:outline-[10px] duration-300">
					View Page
				</Link>
			</div>
		</div>
	);
}
