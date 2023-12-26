import ProductCard from "@/app/shared/ProductCard/ProductCard";
import Link from "next/link";
import React from "react";

export default function OnSale() {
	return (
		<div className="w-10/12 3xl:w-7/12 mx-auto font-semibold">
			<div className="mt-20 mb-10 text-xl justify-between flex items-center">
				<span className="text-2xl font-bold">Unique collection</span>
				<div className="items-center group/view gap-2 flex overflow-hidden text-red-600">
					<Link href={""} className="translate-x-7 group-hover/view:translate-x-0 duration-200">
						View more
					</Link>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-6 h-6 translate-x-9 group-hover/view:translate-x-0 duration-200">
						<path
							fillRule="evenodd"
							d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</div>
			<div className="flex justify-between gap-y-10 flex-wrap">
				<ProductCard isOnSale={true} productID={100} />
				<ProductCard isOnSale={false} productID={100} />
				<ProductCard isOnSale={false} productID={100} />
				<ProductCard isOnSale={false} productID={100} />
			</div>
		</div>
	);
}
