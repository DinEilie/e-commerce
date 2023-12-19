import React from "react";
import Clothing from "./components/Clothing";
import Bags from "./components/Bags";
import Shoes from "./components/Shoes";
import Camping from "./components/Camping";
import About from "./components/About";

export default function NavbarDesktopBottom() {
  return (
    <div className="bg-gray-100 border-b">
      <div
        id="desktopBottom"
        className="py-5 text-lg flex w-10/12 3xl:w-7/12 mx-auto gap-20"
      >
        <Clothing />
        <Bags />
        <Shoes />
        <Camping />
        <About />
      </div>
    </div>
  );
}
