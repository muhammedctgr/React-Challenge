import React from "react";
import Image from "next/image"
function Header() {
  return (
    <div className="h-[80px]  px-10 sm:none bg-green-700 flex items-center `fixed top-0 left-0 right-0 z-50 ">
     <Image src='/Logo.png' alt="Logo" width='200' height='200'/>
    </div>
  );
}

export default Header;
