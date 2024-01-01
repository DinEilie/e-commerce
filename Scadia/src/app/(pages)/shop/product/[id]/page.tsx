import React from "react";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import ProductInfo from "./client/ProductInfo/ProductInfo";
import Incentives from "./components/Incentives/Incentives";

export default function page({ params }: { params: { id: string } }) {
	return (
		<div className="w-10/12 3xl:w-7/12 pb-10 mx-auto pt-10">
			<Breadcrumb params={params} />
			<ProductInfo params={params} />
			<Incentives />
		</div>
	);
}
