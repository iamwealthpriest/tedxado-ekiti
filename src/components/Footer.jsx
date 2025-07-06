import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <div className="bg-black text-white py-[70px] px-[60px] flex flex-row justify-between flex-wrap gap-y-10">
      <div className="flex flex-col gap-[28px]">
        <NavLink to="/" className="w-[156.79px] h-[17.6px]">
          <img
            src={logo}
            alt="TEDxAdo-Ekiti logo"
            className="w-[156.79px] h-[17.6px] object-contain"
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

      <div className="flex flex-col gap-[28px] items-end font-poppins text-white/80">
        <div className="flex flex-row gap-[32px]">
          <a href="/about" className="hover:text-white transition-colors">
            About us
          </a>
          <a href="/partnership" className="hover:text-white transition-colors">
            Partnership
          </a>
          <a href="/tickets" className="hover:text-white transition-colors">
            Tickets
          </a>
        </div>
        <div className="flex flex-row gap-[16px]">
          <a
            href="mailto:mail.tedxekiti@gmail.com"
            className="hover:text-white transition-colors"
          >
            mail.tedxekiti@gmail.com
          </a>
          <a
            href="tel:+2348072101662"
            className="hover:text-white transition-colors"
          >
            +2348072101662
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
