import ProfileCard from "../components/ProfileCard";
import { teamMembers } from "../constants/team";
import JoinCommunity from "../components/JoinCommunity";
import SpeakerGallery from "../components/SpeakerGallery";
import Button from "../components/Button";
import ellipse from "../assets/speakers/Ellipse.webp";
import { NavLink } from "react-router-dom";
import SEO from "../components/SEO";

const Speakers = () => {
  const comingSoon = true;

  return (
    <>
      <SEO
        title="Speakers | Meet the Voices of TEDxAdo-Ekiti 2025"
        description="From visionaries rooted in Ekiti to pioneers reimagining the overlooked, our speakers are more than storytellers. They are builders of possibility. Each one brings insight, urgency, and the fire of lived experience. They speak not just to be heard, but to move minds, hearts, and horizons."
      />

      {/* Hero Section */}
      <section className="min-h-screen w-full bg-black text-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-70"
          style={{ backgroundImage: "url('/src/assets/backdrop.webp')" }}
        />

        {/* Ellipse Full Overlay */}
        <img
          src={ellipse}
          alt="Ellipse overlay"
          className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none brightness-125"
        />

        {/* Text Content - centered */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-5xl font-bold font-bricolage">
              Meet the Voices
            </h1>

            <p className="mt-6 text-base sm:text-xl px-5 leading-relaxed">
              From visionaries rooted in Ekiti to pioneers reimagining the
              overlooked, our speakers are more than storytellers. They are
              builders of possibility. Each one brings insight, urgency, and the
              fire of lived experience. They speak not just to be heard, but to
              move minds, hearts, and horizons.
            </p>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="bg-black px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 text-left inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white font-bricolage">
              Our Speakers
            </h2>
            <div className="h-1 bg-red-600 mt-2" />
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
            <div className="h-1 bg-red-600 mt-2" />
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
            <div className="flex items-center justify-center mt-8">
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
