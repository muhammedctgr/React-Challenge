import React from "react";
import logo from "./Logo.png";
import Image from "next/image"
function Header() {
  return (
    <div className="h-[80px]  px-10 sm:none bg-indigo-700 flex items-center ">
     <Image src='.' alt="Logo" />
    </div>
  );
}

export default Header;
