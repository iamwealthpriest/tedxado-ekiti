import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-red font-medium underline underline-offset-4 text-3xl transition-all duration-300 ease-in-out"
      : "text-white/80 hover:text-white transition-all duration-300 ease-in-out";

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-[60px] py-4 md:py-[25px]">
        <NavLink to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="TEDxAdo-Ekiti"
            className="h-[20px] w-[157px] object-contain"
          />
        </NavLink>

        <div className="hidden md:flex items-center gap-[80px]">
          <div className="flex gap-6 text-2xl font-hupaisa font-light">
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
            <NavLink to="/team" className={navLinkStyle}>
              Team
            </NavLink>
            <NavLink to="/speakers" className={navLinkStyle}>
              Speakers
            </NavLink>
            <NavLink to="/shop" className={navLinkStyle}>
              Shop
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            <Button text="Get your ticket" className="btn-orange" />
            <Button text="Partner with us" className="btn-black" />
          </div>
        </div>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-6 pt-4 bg-black flex flex-col font-hupaisa gap-6">
          <NavLink to="/" className={navLinkStyle} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkStyle} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/team" className={navLinkStyle} onClick={closeMenu}>
            Team
          </NavLink>
          <NavLink to="/speakers" className={navLinkStyle} onClick={closeMenu}>
            Speakers
          </NavLink>
          <NavLink to="/shop" className={navLinkStyle} onClick={closeMenu}>
            Shop
          </NavLink>
          <Button text="Get your ticket" className="btn-orange w-full" />
          <Button text="Partner with us" className="btn-black w-full" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
