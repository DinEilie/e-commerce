"use client";
import React from "react";
import { useState, useEffect } from "react";
import image_url1 from "@/app/assets/shop0.jpg";
import image_url2 from "@/app/assets/shop1.jpg";
import image_url3 from "@/app/assets/shop2.jpg";
import Image from "next/image";

export default function Slider() {
	const DEFAULT = 10;
	const slides = [image_url1, image_url2, image_url3];
	const [slidesIndex, setSlidesIndex] = useState(0);
	const [timer, setTimer] = useState(DEFAULT);

	const handleSliderButton = (value: number) => {
		setSlidesIndex(value);
	};

	const slideStyle = {
		transform: `translateX(-${slidesIndex * 100}%)`,
		transition: "transform 1s ease-in-out",
	};

	// Set a timer every 'DEFAULT' seconds.
	useEffect(() => {
		let interval = setInterval(() => {
			setTimer((timer) => timer - 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		if (timer === 0) {
			// Move to next slider index every 10 seconds.
			if (slidesIndex > slides.length - 2) setSlidesIndex(0);
			else setSlidesIndex(slidesIndex + 1);

			// Reset timer.
			setTimer(DEFAULT);
		}
	}, [slidesIndex, timer]);

	return (
		<div className="">
			<div className="w-[540px] h-[360px] 3xl:w-[720px] 3xl:h-[480px] overflow-hidden rounded-2xl flex">
				{slides.map((item, itemKey) => (
					<Image style={slideStyle} className={"w-full h-full"} src={item} key={itemKey} alt={`Slider Image ${itemKey}`} priority={true} />
				))}
			</div>
			<div className="flex justify-center">
				{slides.map((item, itemKey) => (
					<div
						key={itemKey}
						className={`h-2 p-2 m-2 bg-red-600 duration-300 hover:cursor-pointer rounded-full ${itemKey === slidesIndex ? "w-8" : "w-2"}`}
						onClick={() => {
							setTimer(DEFAULT);
							handleSliderButton(itemKey);
						}}></div>
				))}
			</div>
		</div>
	);
}
