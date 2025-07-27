import droplet from "../assets/teams/droplet.png";

const ImageWrapper = ({ image, alt, comingSoon = false }) => {
  return (
    <div className="relative w-full h-full group overflow-hidden">
      <img
        src={droplet}
        alt="droplet background"
        className="absolute object-contain w-full h-full grayscale"
      />
      <img
        src={image}
        alt={alt}
        className={`absolute object-contain w-full h-full transition duration-500 ease-in-out
          ${
            comingSoon
              ? "brightness-0 contrast-200"
              : "grayscale group-hover:grayscale-0"
          }`}
      />
    </div>
  );
};

export default ImageWrapper;
