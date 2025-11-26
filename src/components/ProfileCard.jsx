import ImageWrapper from "./ImageWrapper.jsx";

const ProfileCard = ({ image, name, role }) => {
  return (
    <div className="flex flex-col relative overflow-hidden w-[403px] h-[559px]">
      <ImageWrapper image={image} alt={name} />
      <div className="absolute left-13 bottom-0 flex flex-col gap-2 z-10">
        <p className="text-4xl text-white font-bricolage tracking-wider transition-all duration-300">
          {name}
        </p>
        <p className="text-white/70 text-xl font-hupaisa font-light">{role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
