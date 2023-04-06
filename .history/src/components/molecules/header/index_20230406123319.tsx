import React from "react";
import logo from "./Logo.png";
function Header() {
  return (
    <div className="h-[80px]  px-10 sm:none bg-indigo-700 flex items-center ">
     <BeakerIcon className="w-10 cursor-pointer text-white" />
    </div>
  );
}

export default Header;