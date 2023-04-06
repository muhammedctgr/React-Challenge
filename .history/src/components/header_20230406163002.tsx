import React from "react";
import Image from "next/image"
function Header() {
  return (
    <div className="h-[80px]  px-10 sm:none bg-green-700 flex items-center Assuming you have a `Header` component, you can use CSS `position: fixed` property along with some JavaScript logic to achieve this effect. Here's an example:

```typescriptreact
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isSticky ? "bg-white shadow" : ""
      }`}
    >
      {/* Your header content goes here */}
    </header>
  );
};

export default Header;
```

In this code, we're using React's `useState` hook to keep track of whether the header is sticky or not. We're also using the `useEffect` hook to add and remove a scroll event listener. The `handleScroll` function gets called on every scroll event and checks if the window's `pageYOffset` (scroll position) is greater than 0. If it is, we set the state to `true`, which adds our CSS classes for the sticky header.

Note that the CSS classes used in this example (`fixed`, `top-0`, `left-0`, `right-0`, `z-50`, `bg-white`, and `shadow`) are from the Tailwind CSS library, but you can use any CSS framework or custom styles you like. The important thing is the `position: fixed` property on the `header` element, which is what makes it sticky. ">
     <Image src='/Logo.png' alt="Logo" width='200' height='200'/>
    </div>
  );
}

export default Header;
