import React from "react";
import logo from "./Logo.png";
function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <h1>Your App Name</h1>
    </header>
  );
}

export default Header;
