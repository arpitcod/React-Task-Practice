import React, { useState } from "react";
import "./css/ResponsiveNav.css";
import { IoMenu } from "react-icons/io5";
const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>

        <button className="menu_btn" onClick={toggleMenu}><IoMenu /></button>
    <div className="topnav d-flex">
        <div className={`${isMenuOpen ? "nav_links d-block" : "nav_links d-none"}`}>
        <a className="active" href="#home">
            Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>

        </div>
    </div>
    </>
  );
};

export default ResponsiveNavbar;
