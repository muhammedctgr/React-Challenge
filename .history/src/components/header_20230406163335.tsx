import React from 'react';
import Image from 'next/image';
function Header() {
  return (
    <div className="sm:none  flex h-[80px] items-center bg-green-700 px-10 ">
      <Image src="/Logo.png" alt="Logo" width="200" height="200" />
    </div>
  );
}

export default Header;
