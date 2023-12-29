import React from "react";
import Slider from "./components/Slider/Slider";
import IntroStyle from "./Introduction.module.css";

export default function Introduction() {
	return (
		<div className={`${IntroStyle.background}`}>
			<div className={`w-full h-[720px] flex flex-col justify-center backdrop-blur-sm backdrop-brightness-50 items-center`}>
				<div id="introduction_body" className="w-9/12 flex justify-center items-center gap-16 3xl:gap-32">
					<div className="text-white w-1/3">
						<div className="text-5xl font-semibold capitalize">
							we are <span className="bg-gradient-to-r font-extrabold from-red-600 to-pink-500 bg-clip-text text-transparent">scadia</span>.
						</div>
						<div className="text-justify text-lg">
							Your Ultimate Destination for Hiking, Camping, and Outdoor Essentials! Explore Nature, Embrace Comfort, and Elevate Your Outdoor
							Experience with Our Curated Selection of High-Quality Gear and Accessories.
						</div>
						<div className="flex gap-3 my-5">
							<button></button>
						</div>
					</div>
					<Slider />
				</div>
			</div>
		</div>
	);
}
