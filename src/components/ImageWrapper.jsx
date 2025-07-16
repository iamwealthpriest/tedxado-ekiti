import droplet from "../assets/teams/droplet.png";

const ImageWrapper = ({ image, alt }) => {
  return (
    <div className="relative w-[403px] h-[559px] group">
      <img
        src={droplet}
        alt="droplet background"
        className="absolute object-contain w-full h-full grayscale "
      />

      {image && (
        <img
          src={image}
          alt={alt}
          className="absolute object-contain w-full h-full filter grayscale transition duration-500 ease-in-out group-hover:grayscale-0"
        />
      )}
    </div>
  );
};

export default ImageWrapper;
