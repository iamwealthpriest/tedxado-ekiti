import bg from "../assets/teams/background.png";
import svg from "../assets/teams/Group.svg";
import ProfileCard from "../components/ProfileCard";
import { teamMembers } from "../constants/team";
import SEO from "../components/SEO";

const Team = () => {
  return (
    <>
      <SEO
        title="Meet the Team | TEDxAdo-Ekiti Organizers"
        description="Meet the team weaving stories, purpose, and possibilities across generations and geographies."
      />

      <section className="min-h-screen w-full bg-black text-white pt-20">
        <div className="relative w-full min-h-[60vh] overflow-hidden">
          <img
            src={bg}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-hupaisa flex items-center gap-1 flex-wrap justify-center">
              The Bridge between{"  "}
              <span className="flex items-center">
                R
                <img
                  src={svg}
                  alt="svg"
                  className="w-20 md:w-20 sm:w-5 inline-block"
                />
                ts
              </span>{" "}
              and Horizons
            </h1>
            <p className="text-base sm:text-xl mt-4">
              Meet the team weaving stories, purpose, and possibilities across
              <br />
              generations and geographies.
            </p>
          </div>
        </div>

        <div className="bg-black text-white px-4 py-6 text-center text-base sm:text-xl">
          <p>
            From the heart of Ekiti to the edges of tomorrow, our team is made
            up of grounded visionaries.
            <br className="hidden sm:block" />
            Each one rooted in local pride and reaching toward global impact.
            We’re not just organizing a TEDx event —
            <br className="hidden sm:block" />
            we’re building a movement that connects our home to the world.
          </p>
        </div>

        <div className="py-10 px-4 sm:px-10">
          <p className="text-3xl sm:text-5xl font-bricolage text-orange font-bold mb-6 text-center sm:text-left">
            Meet The Dreamers
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-5">
            {teamMembers.map((member, index) => (
              <ProfileCard
                key={index}
                image={member.image}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
