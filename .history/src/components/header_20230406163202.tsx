import React from "react";
import Image from "next/image"
function Header() {
  return (
    <div style=className="h-[80px]  px-10 sm:none bg-green-700 flex items-center ">
     <Image src='/Logo.png' alt="Logo" width='200' height='200'/>
    </div>
  );
}

export default Header;
