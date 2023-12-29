import React from "react";
import Image from "next/image";
import brandLogo1 from "@/app/assets/Adidas_Logo.svg";
import brandLogo2 from "@/app/assets/TheNorthFace_Logo.svg";
import brandLogo3 from "@/app/assets/Puma_Logo.svg";
import brandLogo4 from "@/app/assets/Columbia_Logo.svg";
import brandLogo5 from "@/app/assets/JackWolfskin_Logo.svg";
import brandLogo6 from "@/app/assets/Garmin_Logo.svg";

export default function Brands() {
	return (
		<div className="pb-40">
			<div className="w-10/12 3xl:w-7/12 mx-auto font-semibold">
				<div className="mt-40 mb-10 pt-20 text-xl justify-between flex items-center">
					<span className="text-3xl font-bold">Top brands</span>
				</div>
				<div className="flex flex-wrap justify-between border border-zinc-300">
					<div className="bg-white grow border-r-2 p-5 flex items-center group/scale hover:cursor-pointer">
						<Image src={brandLogo1} alt="Adidas logo." className="w-28 mx-auto group-hover/scale:scale-110 duration-500" />
					</div>
					<div className="bg-white grow border-r-2 p-5 flex items-center group/scale hover:cursor-pointer">
						<Image src={brandLogo2} alt="The North Face logo." className="w-28 mx-auto group-hover/scale:scale-110 duration-500" />
					</div>
					<div className="bg-white grow border-r-2 p-5 flex items-center group/scale hover:cursor-pointer">
						<Image src={brandLogo3} alt="Puma logo." className="w-28 mx-auto group-hover/scale:scale-110 duration-500" />
					</div>
					<div className="bg-white grow border-r-2 p-5 flex items-center  group/scale hover:cursor-pointer">
						<Image src={brandLogo4} alt="Columbia logo." className="w-28 mx-auto group-hover/scale:scale-110 duration-500" />
					</div>
					<div className="bg-white grow border-r-2 p-5 flex items-center group/scale hover:cursor-pointer">
						<Image src={brandLogo5} alt="Jack Wolfskin logo." className="w-28 mx-auto group-hover/scale:scale-110 duration-500" />
					</div>
					<div className="bg-white grow p-5 flex items-center group/scale hover:cursor-pointer">
						<Image src={brandLogo6} alt="Garmin logo." className="w-28 mx-auto group-hover/scale:scale-110 duration-500" />
					</div>
				</div>
			</div>
		</div>
	);
}
