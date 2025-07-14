import ImageWrapper from "./ImageWrapper.jsx";

const ProfileCard = ({ image, name, role }) => {
  return (
    <div className="flex flex-col relative">
      <ImageWrapper image={image} alt={name} />
      <div className="absolute left-13 bottom-0 flex flex-col gap-5">
        <p className="text-4xl text-white font-bricolage">{name}</p>
        <p className="text-white/70 text-xl font-hupaisa font-thin">{role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
