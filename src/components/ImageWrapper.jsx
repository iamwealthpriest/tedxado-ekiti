import droplet from "../assets/teams/droplet.png";

const ImageWrapper = ({ image, alt }) => {
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
        className={`absolute object-contain w-full h-full transition duration-500 ease-in-out grayscale group-hover:grayscale-0`}
      />
    </div>
  );
};

export default ImageWrapper;
