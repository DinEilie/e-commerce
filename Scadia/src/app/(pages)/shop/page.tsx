import React from "react";
import Filter from "./components/Filter/Filter";
import ProductsList from "./client/ProductList/ProductsList";
import { Suspense } from "react";
import ProductTabSkeleton from "@/app/shared/ProductTabSkeleton/ProductTabSkeleton";
import Link from "next/link";

export default function page() {
	return (
		<div className="w-10/12 3xl:w-7/12 pb-10 mx-auto pt-10">
			<div className="pb-10 text-lg flex gap-4 font-light items-center text-zinc-500">
				<Link className="hover:text-red-600" href={"/"}>
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
				<Link className="underline text-red-600" href={"/shop"}>
					Shop
				</Link>
			</div>
			<div className="flex justify-between">
				<Filter />
				<div className="border bg-white w-[80%]">
					<div className="p-10 border-b">
						<div className="text-5xl w-fit font-bold bg-gradient-to-r from-orange-500 via-pink-600 to-red-500 text-transparent bg-clip-text">
							Shop
						</div>
					</div>
					<Suspense
						fallback={
							<div>
								<ProductTabSkeleton />
								<ProductTabSkeleton />
								<ProductTabSkeleton />
							</div>
						}>
						<ProductsList />
					</Suspense>
				</div>
			</div>
		</div>
	);
}
