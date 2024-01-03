import React from "react";

export default function ProductTabSkeleton() {
	return (
		<div className="animate-pulse border-b bg-white p-5 flex items-center justify-between">
			<div className="relative w-fit">
				<div className="w-64 h-64 rounded-3xl flex justify-center items-center bg-neutral-300"></div>
			</div>
			<div className="w-1/2 flex flex-col gap-5">
				<div className="flex gap-2">
					<div className="h-2 rounded-full w-2/12 bg-neutral-300"></div>
					<div className="h-2 rounded-full w-1/12 bg-neutral-300"></div>
					<div className="h-2 rounded-full w-9/12 bg-neutral-300"></div>
				</div>
				<div className="flex gap-2">
					<div className="h-2 rounded-full w-5/12 bg-neutral-300"></div>
					<div className="h-2 rounded-full w-5/12 bg-neutral-300"></div>
					<div className="h-2 rounded-full w-2/12 bg-neutral-300"></div>
				</div>
				<div className="flex gap-2">
					<div className="h-2 rounded-full w-3/12 bg-neutral-300"></div>
					<div className="h-2 rounded-full w-7/12 bg-neutral-300"></div>
					<div className="h-2 rounded-full w-2/12 bg-neutral-300"></div>
				</div>
				<div className="flex gap-2">
					<div className="h-2 rounded-full w-10/12 bg-neutral-300"></div>
					<div className="h-2 rounded-full w-1/12 bg-neutral-300"></div>
					<div className="h-2 rounded-full w-1/12 bg-neutral-300"></div>
				</div>
				<div className="my-10 flex gap-2">
					<div className="h-8 w-8 rounded bg-neutral-300"></div>
					<div className="h-8 w-8 rounded bg-neutral-300"></div>
					<div className="h-8 w-8 rounded bg-neutral-300"></div>
					<div className="h-8 w-8 rounded bg-neutral-300"></div>
				</div>
			</div>
			<div className="flex flex-col items-center gap-2 mt-10">
				<div className="bg-neutral-300 w-28 h-10"></div>
				<div className="bg-neutral-300 w-28 h-10"></div>
			</div>
		</div>
	);
}
