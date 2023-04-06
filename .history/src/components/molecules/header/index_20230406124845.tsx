import React from "react";
import Image from "next/image"
function Header() {
  return (
    <div className="h-[80px]  px-10 sm:none bg-indigo-700 flex items-center ">
     <Image src='./Logo.png' alt="Logo" width/>
    </div>
  );
}

export default Header;
