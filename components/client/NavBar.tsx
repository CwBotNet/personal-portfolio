import React from "react";
import { ModeToggle } from "../modeToggle";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full h-10  md:h-10  sticky top-2  bg-black rounded-2xl z-50 container">
      <div className="container flex justify-between">
        <div
          id="navgation"
          className="capitalize flex items-center gap-x-4 font-bold text-white"
        >
          <Link href={"#home"}>home</Link>
          <Link href={"#about"}>about</Link>
          <Link href={"#project"}>Project</Link>
          <Link href={"#contact"}>contact</Link>
        </div>

        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
