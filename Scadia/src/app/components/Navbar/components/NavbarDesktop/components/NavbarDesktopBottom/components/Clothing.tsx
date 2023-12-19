"use client"
import { useNavbarStore } from "@/app/stores/Navbar";
import Link from "next/link";
import React from "react";

export default function Clothing() {
  const store = useNavbarStore();
  return (
    <Link
      className={`${
        store.showClothing ? "text-red-600" : ""
      } focus-visible:text-red-600 duration-200 font-medium`}
      href="Navbar"
      onMouseEnter={() => {
        if (store.showBags || store.showCamping || store.showShoes) {
          store.setShowBags(false);
          store.setShowShoes(false);
          store.setShowCamping(false);
          setTimeout(() => {
            store.setShowClothing(true);
          }, 160);
        } else {
          store.setShowClothing(true);
        }
      }}
    >
      <div className="flex gap-3 items-center">
        Clothing
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </Link>
  );
}
