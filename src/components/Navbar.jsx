import { NavLink } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-red underline underline-offset-4 font-semibold text-3xl transition-all duration-300 ease-in-out"
      : "text-gray-400 hover:text-white transition-all duration-300 ease-in-out";

  return (
    <nav className="bg-black text-white px-[60px] py-[25px] flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={logo}
          alt="TEDxAdo-Ekiti Logo"
          className="h-[17.6] w-[157px]"
        />
      </div>

      <div className="flex flex-row gap-[185px]">
        <div className="flex items-center gap-6 text-2xl font-poppins">
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
    </nav>
  );
};

export default Navbar;
