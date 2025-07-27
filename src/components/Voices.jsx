import { NavLink } from "react-router-dom";
import Button from "./Button";
import SpeakerGallery from "./SpeakerGallery";

const Voices = () => {
  return (
    <div className="px-[60px] max-lg:px-[20px] py-15">
      <div className="flex flex-col text-center gap-5 pb-15">
        <h2 className="red-text text-5xl">Meet the voices</h2>
        <p className="text-2xl">
          We're bringing together the most audacious thinkers,doers and
          investors in African tech,
          <br />
          working on everything from fintech to commerce,renewable
          energy,climate change,tech
          <br />
          policy,AI,telco,cloud and more.
        </p>
      </div>
      <div>
        <h1 className="heading-with-underline">Our Speakers</h1>
        <SpeakerGallery comingSoon={true} />
        <NavLink to="/speakers" className="flex items-center justify-center">
          <Button text="View all speakers" className="btn-orange" />
        </NavLink>
      </div>
    </div>
  );
};

export default Voices;
