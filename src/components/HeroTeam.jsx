import { heroTeam } from "../constants/team";

const HeroTeamCarousel = () => {
  return (
    <div className="w-full py-8 overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 w-max">
        {heroTeam.map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center shrink-0 w-[80vw] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto rounded-xl overflow-hidden relative"
          >
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-[120px] bg-black/20 backdrop-blur-md border-t border-white/20 px-4 py-3 text-white flex flex-col justify-center items-center rounded-tl-xl rounded-tr-xl">
                <p className="font-black text-center text-2xl font-bricolage leading-tight">
                  {person.name}
                </p>
                <p className="text-2xl font-thin font-hupaisa text-center">
                  {person.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroTeamCarousel;
