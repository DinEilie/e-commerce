"use client";
import { useProductStore } from "@/app/stores/Product";
import Link from "next/link";
import React from "react";

export default function Breadcrumb({ params }: { params: { id: string } }) {
	const store = useProductStore();
	return (
		<div className="pb-10 text-lg flex gap-4 font-light items-center text-zinc-500">
			<Link className="hover:text-red-600" href="/" as="/">
				Home
			</Link>
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
					<path
						fillRule="evenodd"
						d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z"
						clipRule="evenodd"
					/>
				</svg>
			</span>
			<Link className="hover:text-red-600" href="/shop" as="/shop">
				Shop
			</Link>
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
					<path
						fillRule="evenodd"
						d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z"
						clipRule="evenodd"
					/>
				</svg>
			</span>
			<Link
				className="hover:text-red-600 capitalize"
				href={`/shop?category=${store.product?.productCategory}&view=all`}
				as={`/shop?category=${store.product?.productCategory}&view=all`}>
				{store.product?.productCategory}
			</Link>
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
					<path
						fillRule="evenodd"
						d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z"
						clipRule="evenodd"
					/>
				</svg>
			</span>
			<Link
				className="hover:text-red-600 capitalize"
				href={`/shop?category=${store.product?.productCategory}&view=${store.product?.productType}`}
				as={`/shop?category=${store.product?.productCategory}&view=${store.product?.productType}`}>
				{store.product?.productType}
			</Link>
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
					<path
						fillRule="evenodd"
						d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z"
						clipRule="evenodd"
					/>
				</svg>
			</span>
			<Link className="underline text-red-600" href={`/shop/product/${params.id}`} as={`/shop/product/${params.id}`}>
				{store.product?.productName}
			</Link>
		</div>
	);
}
