"use client";
import { ProductType } from "@/app/types/product";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useProductStore } from "@/app/stores/Product";
export default function ProductInfo({ params }: { params: { id: string } }) {
	const store = useProductStore();
	useEffect(() => {
		store.setProduct(undefined);
		store.setIsFetched(false);
		async function getProductQuery() {
			const response = await fetch(`/api/getProduct/${params.id}`);
			const { data }: { data: ProductType | undefined } = await response.json();
			store.setProduct(data);
			store.setIsFetched(true);
		}
		getProductQuery();
	}, []);
	return (
		<div className="border bg-white p-5">
			<div className="text-4xl font-bold text-center">{store.product?.productName}</div>
			<hr className="mx-auto w-11/12 my-4" />
			<Image
				className="w-96 h-96"
				src={store.product?.productImageURL ?? ""}
				alt={`${store.product?.productName} by ${store.product?.productBrand}`}
			/>
			<div className="flex gap-3">
				<Image
					className="w-24 h-24 border-2 border-red-600 rounded"
					src={store.product?.productImageURL ?? ""}
					alt={`${store.product?.productName} by ${store.product?.productBrand}`}
				/>
				<Image
					className="w-24 h-24 border-2 border-red-600 rounded"
					src={store.product?.productImageURL ?? ""}
					alt={`${store.product?.productName} by ${store.product?.productBrand}`}
				/>
				<Image
					className="w-24 h-24 border-2 border-red-600 rounded"
					src={store.product?.productImageURL ?? ""}
					alt={`${store.product?.productName} by ${store.product?.productBrand}`}
				/>
				<Image
					className="w-24 h-24 border-2 border-red-600 rounded"
					src={store.product?.productImageURL ?? ""}
					alt={`${store.product?.productName} by ${store.product?.productBrand}`}
				/>
			</div>
		</div>
	);
}
