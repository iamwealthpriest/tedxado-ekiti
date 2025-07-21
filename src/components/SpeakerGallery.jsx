import { useEffect, useState } from "react";
import { SpeakerArray } from "../constants";

const SpeakerGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTextIndex, setShowTextIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTextIndex(activeIndex);
    }, 300);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <div className="w-full flex flex-col sm:flex-row sm:items-center sm:overflow-x-auto gap-4 px-4 py-8">
      {SpeakerArray.map((speaker, index) => {
        const isActive = index === activeIndex;
        const showText = index === showTextIndex;

        return (
          <div
            key={index}
            onMouseEnter={() =>
              window.innerWidth >= 640 && setActiveIndex(index)
            }
            onClick={() => window.innerWidth < 640 && setActiveIndex(index)}
            className={`relative transition-all duration-500 ease-in-out cursor-pointer rounded-xl overflow-hidden ${
              isActive
                ? "w-full sm:w-[410px] h-[450px]"
                : "w-full sm:w-[170px] h-[450px]"
            }`}
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-full object-cover grayscale"
            />

            {(isActive || window.innerWidth < 640) && (
              <div className="absolute bottom-0 left-0 w-full h-[90px] bg-black/60 backdrop-blur-lg px-4 py-3 text-white flex flex-col justify-center items-center rounded-t-xl transition-opacity duration-300 ease-in-out">
                {(showText || window.innerWidth < 640) && (
                  <>
                    <h3 className="font-black text-center text-2xl font-bricolage leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-2xl font-thin font-hupaisa text-center">
                      {speaker.position}
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SpeakerGallery;
