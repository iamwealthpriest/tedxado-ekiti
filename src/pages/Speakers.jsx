import ProfileCard from "../components/ProfileCard";
import { teamMembers } from "../constants/team";
import JoinCommunity from "../components/JoinCommunity";
import SpeakerGallery from "../components/SpeakerGallery";
import Button from "../components/Button";
import ellipse from "../assets/speakers/Ellipse.png";
import { NavLink } from "react-router-dom";

const Speakers = () => {
  const comingSoon = true;

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen w-full bg-black text-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-70"
          style={{ backgroundImage: "url('/src/assets/backdrop.png')" }}
        ></div>

        {/* Ellipse Full Overlay */}
        <img
          src={ellipse}
          alt="Ellipse overlay"
          className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none brightness-125"
        />

        {/* Text Content */}
        <div className="relative z-20 mx-auto text-center px-4 sm:px-6 py-16 md:py-24">
          <h3 className="text-3xl md:text-5xl lg:mt-[20vh] lg:mb-5 max-lg:mt-20 max-lg:mb-5 font-bold font-bricolage">
            Meet the Voices
          </h3>
          <p className="text-3xl px-33 md:text-2xl lg:text-2xl">
            For years, Ekiti has been called quiet. Remote. Passed over. But we
            see it differently. We see a seedbed.
            <br />
            We believe ideas don’t only come from capital cities. That
            brilliance isn’t bound by traffic lights or skyscrapers. That the
            places we come from still hold the power to shape where we are
            going.
            <br />
            TEDxAdoEkiti is more than an event. It is a signal. A shift. A
            chance to make the world look again. At Ekiti. At overlooked places.
            <br />
            At people who stayed.
            <br />
            <span className="text-red font-medium text-base text-[24px] mt-8">
              Because here in this dry land, something fertile is rising
            </span>
          </p>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="bg-black px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 text-left inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white font-bricolage">
              Our Speakers
            </h2>
            <div className="h-1 bg-red-600 mt-2"></div>
          </div>
          <div>
            <SpeakerGallery comingSoon={comingSoon} />
          </div>
        </div>
      </section>

      {/* Our Panelists Section */}
      <section>
        <div className="bg-black px-6 py-16">
          <div className="mb-8 sm:mb-12 text-left inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white font-bricolage">
              Our Panelists
            </h2>
            <div className="h-1 bg-red-600 mt-2"></div>
          </div>
          <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.slice(0, 3).map((member, index) => (
              <ProfileCard
                key={index}
                image={member.image}
                name={member.name}
                role={member.role}
                comingSoon={comingSoon}
              />
            ))}
          </div>
          {comingSoon ? (
            <div className="flex items-center justify-center">
              <Button
                text="View all panelists"
                className="btn-orange cursor-not-allowed"
                disabled
              />
            </div>
          ) : (
            <NavLink to="/team" className="flex items-center justify-center">
              <Button text="View all panelists" className="btn-orange" />
            </NavLink>
          )}
        </div>
      </section>

      {/* Join our community Section */}
      <section className="bg-black px-6 py-16">
        <JoinCommunity />
      </section>
    </>
  );
};

export default Speakers;
