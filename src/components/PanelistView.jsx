import { teamMembers } from "../constants/team";
import ProfileCard from "../components/ProfileCard";
import Button from "./Button";
import TEDxBg from "../assets/home/TEDx.png";
import { NavLink } from "react-router-dom";

const PanelistView = () => {
  const comingSoon = true;

  return (
    <div className="px-[60px] max-lg:px-[20px] py-20">
      <h1 className="heading-with-underline">Our Panelists</h1>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${TEDxBg})` }}
      >
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
  );
};

export default PanelistView;
