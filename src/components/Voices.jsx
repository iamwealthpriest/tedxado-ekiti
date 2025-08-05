import { NavLink } from "react-router-dom";
import Button from "./Button";
import SpeakerGallery from "./SpeakerGallery";

const Voices = () => {
  const comingSoon = true;

  return (
    <div className="px-[60px] max-lg:px-[20px] py-15">
      <div className="flex flex-col text-center gap-5 pb-15">
        <h2 className="red-text text-5xl">Meet the voices</h2>
        <p className="text-2xl max-lg:hidden">
          We're bringing together the most audacious thinkers, doers and
          investors in African tech,
          <br />
          working on everything from fintech to commerce, renewable energy,
          climate change, tech
          <br />
          policy, AI, telco, cloud and more.
        </p>

        <p className="text-xl max-lg:flex lg:hidden leading-10">
          We're bringing together the most audacious thinkers, doers and
          investors in African tech, working on everything from fintech to
          commerce, renewable energy, climate change, tech policy, AI, telco,
          cloud and more.
        </p>
      </div>

      <div>
        <h1 className="heading-with-underline">Our Speakers</h1>
        <SpeakerGallery comingSoon={comingSoon} />

        {comingSoon ? (
          <div className="flex items-center justify-center">
            <Button
              text="View all speakers"
              className="btn-orange cursor-not-allowed"
              disabled
            />
          </div>
        ) : (
          <NavLink to="/speakers" className="flex items-center justify-center">
            <Button text="View all speakers" className="btn-orange" />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Voices;
