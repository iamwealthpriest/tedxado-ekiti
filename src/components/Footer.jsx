import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-[70px] px-6 md:px-[60px] flex flex-col md:flex-row justify-between items-start md:items-center gap-y-12 md:gap-0">
      <div className="order-1 md:order-2 flex flex-col gap-8 w-full md:w-auto font-hupaisa text-white/80">
        <div className="flex flex-col justify-end md:flex-row md:gap-[32px] gap-4">
          <NavLink to="/about" className="hover:text-white transition-colors">
            About us
          </NavLink>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdkWuXtdkrJaSd-fWJq6qIYdUbIXCO2lN18_Rpg87TV-OjVqg/viewform"
            className="hover:text-white transition-colors"
          >
            Partnership
          </a>
          <a
            href="https://attendout.com/c/TedXAdoEkiti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Tickets
          </a>
        </div>
        <div className="flex flex-col justify-end md:flex-row gap-2 md:gap-[16px]">
          <a
            href="mailto:mail.tedxekiti@gmail.com"
            className="hover:text-white transition-colors"
          >
            mail.tedxekiti@gmail.com
          </a>
          <a
            href="tel:+2348160812613"
            className="hover:text-white transition-colors"
          >
            +2348160812613
          </a>
          <a
            href="tel:+2348072101662"
            className="hover:text-white transition-colors"
          >
            +2348072101662
          </a>
        </div>
      </div>

      {/* Logo + Socials (appears second on mobile, first on desktop) */}
      <div className="order-2 md:order-1 flex flex-col gap-6 w-full md:w-auto">
        <NavLink to="/" className="block w-[156.79px] h-[17.6px]">
          <img
            src={logo}
            alt="TEDxAdo-Ekiti logo"
            className="w-full h-full object-contain"
          />
        </NavLink>
        <div className="flex flex-row gap-[12px]">
          {socialLinks.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src={icon}
                alt={`${name} icon`}
                className="w-[24px] h-[24px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
