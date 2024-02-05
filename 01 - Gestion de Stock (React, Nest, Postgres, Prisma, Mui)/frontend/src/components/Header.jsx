import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className='flex items-center justify-between shadow-xl px-16 py-2 b'>
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
