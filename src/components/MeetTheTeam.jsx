import { NavLink } from "react-router-dom";
import svg from "../assets/home/Vector.svg";
import HeroTeamCarousel from "./HeroTeam";

const MeetTheTeam = () => {
  return (
    <div className="flex flex-col px-[30px] py-10">
      <div className="flex flex-row max-lg:flex-col justify-between items-center max-lg:items-start">
        <h1 className="red-text text-5xl font-bricolage font-light">
          Meet the team
        </h1>
        <NavLink
          to="/team"
          className="flex flex-row items-center gap-2 justify-center"
        >
          <p className="text-2xl">View all</p>
          <img
            src={svg}
            alt={"forward arrow"}
            className="object-contain h-5 w-7"
          />
        </NavLink>
      </div>
      <p className="py-5 text-2xl">
        We are builders,creatives, and local dreamers who believe that
        overlooked places still carry power.
        <br />
        Each of us is pouring out what we know, who we are, and what we hope
        into this dot. And together, we are making
        <br />
        something unforgettable
      </p>
      <HeroTeamCarousel />
    </div>
  );
};

export default MeetTheTeam;
