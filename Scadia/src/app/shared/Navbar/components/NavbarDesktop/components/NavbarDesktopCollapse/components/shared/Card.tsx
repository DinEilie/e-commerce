import React from "react";
import Image, { StaticImageData } from "next/image";

type CardType = {
    title: string;
    src: string | StaticImageData;
    alt: string;
    description: string;
}
export default function Card(props: CardType) {
  return <div className="group/card flex flex-col text-center hover:cursor-pointer">
    <div className="overflow-hidden rounded-md items-center h-60 w-72 drop-shadow-xl"><Image src={props.src} alt={props.alt}  className="h-60 w-72 group-hover/card:scale-105 duration-500 saturate-[1.15]" /></div>
    <div className="text-lg font-semibold text-zinc-700">{props.title}</div>
    <div className="text-base font-medium text-zinc-700">{props.description}</div>
  </div>;
}
