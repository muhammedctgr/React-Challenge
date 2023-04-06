import React from 'react';
import Image from 'next/image';
function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 sm:none  flex h-[80px] items-center bg-green-700 px- ">
      <Image src="/Logo.png" alt="Logo" width="180" height="180" />
    </div>
  );
}

export default Header;
