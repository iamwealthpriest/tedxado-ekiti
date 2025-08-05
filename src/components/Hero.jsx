import { NavLink } from "react-router-dom";
import svg from "../assets/teams/Group.svg";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="w-full bg-black text-white pb-15 px-5 pt-[180px] max-lg:pt-[180px] lg:px-24 flex flex-col gap-20">
      <div className="flex flex-col gap-8">
        {/* Cosmetic addition for testing */}
        <h1 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-7xl">
          <span className="red-text">TEDx</span>Ado-Ekiti
        </h1>

        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-bricolage flex flex-wrap items-center gap-2">
          Connecting Places:
          <span className="font-hupaisa flex items-center gap-2">
            R
            <img src={svg} alt="svg" className="w-10 lg:w-16 md:w-12" />
            ts to Horizons
          </span>
        </h2>

        <div className="text-xl md:text-2xl lg:text-3xl mt-5 px-5 py-3 bg-orange/10 border-l-4 border-red max-w-[950px] leading-13 max-lg:leading-8">
          <p>
            A one-day gathering of thinkers, dreamers and builders live in
            Ado-Ekiti
          </p>
          <p>September 20, 2025 | Ado-Ekiti, Nigeria</p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-8">
          <a
            href="https://attendout.com/c/TedXAdoEkiti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              text="Get your ticket"
              className="btn-orange w-full md:w-auto"
            />
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdkWuXtdkrJaSd-fWJq6qIYdUbIXCO2lN18_Rpg87TV-OjVqg/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              text="Partner with us"
              className="btn-black w-full md:w-auto"
            />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center">
        <h2 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-6xl text-red mb-5">
          Why TEDx in Ekiti?
        </h2>
        <p className="text-xl md:text-2xl leading-10 max-w-5xl mx-auto">
          For years, Ekiti has been called quiet. Remote. Passed over. But we
          see it differently. We see a seedbed.
          <br />
          We believe ideas don't only come from capital cities. That brilliance
          isn't bound by traffic lights or skyscrapers.
          <br />
          That the places we come from still hold the power to shape where we
          are going.
          <br />
          TEDxAdoEkiti is more than an event. It is a signal. A shift. A chance
          to make the world look again.
          <br />
          At Ekiti. At overlooked places. At people who stayed.
          <br />
          <span className="text-red">
            Because here in this dry land, something fertile is rising.
          </span>
        </p>
        <NavLink to="/about">
          <Button text="Read more" className="btn-orange mt-10" />
        </NavLink>
      </div>
    </section>
  );
};

export default Hero;
