"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Price() {
	const [open, setOpen] = useState(false);
	const [slider, setSlider] = useState(0);
	const [sliderPop, setSliderPop] = useState(0);
	const [sliderPopTimer, setSliderPopTimer] = useState(2);
	const [sliderMin, setSliderMin] = useState(0);
	const [sliderMax, setSliderMax] = useState(1000);

	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (sliderPopTimer > 0) {
			interval = setInterval(() => {
				setSliderPopTimer((prev) => prev - 1);
			}, 1000);
		}

		return () => {
			clearInterval(interval);
		};
	}, [sliderPopTimer]);

	const sliderPopStyle = {
		transform: `translateX(${sliderPop}px)`,
	};

	const clampMin = () => {
		let clamped = sliderMin;
		if (clamped < 0) clamped = 0;
		else if (clamped > sliderMax) clamped = sliderMax;
		setSliderMin(clamped);
	};

	const clampMax = () => {
		let clamped = sliderMax;
		if (clamped < sliderMin) clamped = sliderMin;
		else if (clamped > 1000) clamped = 1000;
		setSliderMax(clamped);
	};

	return (
		<li>
			<button
				type="button"
				className={`${open ? "text-red-600" : ""} text-lg font-semibold items-center flex gap-5`}
				onClick={() => setOpen(!open)}>
				Price
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className={`${open ? "-rotate-0" : "-rotate-180"} duration-200 w-5 h-5`}>
					<path
						fill-rule="evenodd"
						d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<div className={`${open ? "h-[216px]" : "h-0"} duration-200 ml-5 my-1 overflow-hidden`}>
				<div className="">
					<div className="w-[150px] mx-auto">
						<div style={sliderPopStyle} className={`w-fit`}>
							<div
								className={`bg-gradient-to-r from-red-600 to-red-400 rounded-t-full rounded-bl-full h-10 w-10 rotate-45 items-center duration-200 ${
									sliderPopTimer !== 0 ? "opacity-100" : "opacity-0"
								}`}>
								<div className="text-white text-xs font-bold -rotate-45 text-center translate-y-3">${slider}</div>
							</div>
						</div>
						<input
							className="w-full h-1 appearance-none hover:cursor-pointer bg-gradient-to-r from-red-600 to-red-400"
							name="min"
							type="range"
							min={0}
							max={1000}
							defaultValue={slider}
							onChange={(event) => {
								setSliderPopTimer(3);
								const value = event.target.valueAsNumber;
								const newMin = value < 100 ? 0 : value - 100;
								const newMax = value > 900 ? 1000 : value + 100;
								const diff = value / 1000;
								setSliderPop(130 * diff - 9);
								setSliderMin(newMin);
								setSliderMax(newMax);
								setSlider(value);
							}}
						/>
					</div>
					<div className="flex text-center items-center gap-2 mt-7">
						<div className="flex w-fit gap-2 p-1 border">
							<div className="">$</div>
							<input
								className="w-16 text-right caret-red-600 outline-red-600"
								maxLength={4}
								value={sliderMin}
								min={0}
								max={1000}
								onBlur={clampMin}
								onChange={(event) => {
									setSliderMin(event.target.valueAsNumber);
								}}
								type="number"
							/>
						</div>{" "}
						-
						<div className="flex w-fit gap-2 p-1 border">
							<div className="">$</div>
							<input
								className="w-16 text-right caret-red-600 outline-red-600"
								maxLength={4}
								value={sliderMax}
								min={0}
								max={1000}
								onBlur={clampMax}
								onChange={(event) => {
									setSliderMax(event.target.valueAsNumber);
								}}
								type="number"
							/>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
}
