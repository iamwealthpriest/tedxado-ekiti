import { NavLink } from "react-router-dom";
import bg from "../assets/home/homebg.png";
import svg from "../assets/teams/Group.svg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative w-full h-[150vh] lg:h-[160vh] md:h-[120vh] overflow-hidden bg-black">
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      <div className="absolute inset-0 z-10 flex flex-col h-80 max-lg:h-screen mt-30 max-lg:mt-25 justify-between p-[20px] md:p-[40px] lg:p-[100px]">
        <div className="text-left">
          <h1 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-7xl mb-3">
            <span className="red-text">TEDx</span>Ado-Ekiti
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold font-bricolage flex items-center gap-0 flex-wrap justify-start">
            Connecting Places:
            <span className="font-hupaisa items-center gap-1 flex-wrap justify-center flex">
              <span className="flex gap-0 items-center">
                R
                <img
                  src={svg}
                  alt="svg"
                  className="w-10 lg:w-25 md:w-20 sm:w-5 inline-block"
                />
                ts
              </span>{" "}
              to Horizons
            </span>
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl mt-7 px-5 py-3 bg-orange/5 border-l-5 border-red max-w-[950px]">
            <p>
              A one-day gathering of thinkers, dreamers and builders live in
              Ado-Ekiti
            </p>
            <p>Septemeber 20, 2025 | Ado-Ekiti, Nigeria</p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row items-left justify-start gap-10 max-lg:gap-5 mt-10">
            <a
              href="https://attendout.com/c/TedXAdoEkiti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text={`Get your ticket`} className="btn-orange" />
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdkWuXtdkrJaSd-fWJq6qIYdUbIXCO2lN18_Rpg87TV-OjVqg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="Partner with us" className="btn-black" />
            </a>
          </div>
        </div>

        {/* hero-btm */}
        <div className="text-center mt-20">
          <h1 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-7xl mb-3 text-red">
            Why TEDx in Ekiti?
          </h1>
          <p className="text-xl md:text-2xl lg:text-2xl">
            For years, Ekiti has been called quiet. Remote. Passed over. But we
            see it differently. We see a seedbed.
            <br />
            We believe ideas don't only come from capital cities. That
            brilliance isn't bound by traffic lights or skyscrapers. That the
            places
            <br />
            we come from still hold the power to shape where we are going.
            <br />
            TEDxAdoEkiti is more than an event. It is a signal. A shift. A
            chance to make the world look again. At Ekiti. At overlooked places.
            <br />
            At people who stayed.
            <br />
            <span className="text-red">
              Because here in this dry land,something fertile is rising
            </span>
          </p>
          <NavLink to="/about">
            <Button text={`Read more`} className="btn-orange mt-10" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
