import { NavLink } from "react-router-dom";
import Button from "./Button";
import SpeakerGallery from "./SpeakerGallery";
import { SpeakerArray } from "../constants";

const Voices = () => {

  return (
    <div className="px-[60px] max-lg:px-[20px] py-15">
      <div className="flex flex-col text-center gap-5 pb-15">
        <h2 className="red-text text-5xl">Meet the voices</h2>
        <p className="text-2xl max-lg:hidden">
          From visionaries rooted in Ekiti to pioneers reimagining the overlooked, our speakers are more than storytellers. 
          <br/>
          They are builders of possibility. Each one brings insight, urgency, and the fire of lived experience.
          <br/>
          They speak not just to be heard, but to move minds, hearts, and horizons.
        </p>

        <p className="text-xl max-lg:flex lg:hidden leading-10">
          They are builders of possibility. Each one brings insight, urgency,
          and the fire of lived experience. Geared to move minds, hearts and
          horizons.
        </p>
      </div>

      <div>
        <h1 className="heading-with-underline">Our Speakers</h1>
        <SpeakerGallery speakers={SpeakerArray.slice(0, 5)} />

        <NavLink to="/speakers" className="flex items-center justify-center">
          <Button text="View all speakers" className="btn-orange" />
        </NavLink>
      </div>
    </div>
  );
};

export default Voices;
