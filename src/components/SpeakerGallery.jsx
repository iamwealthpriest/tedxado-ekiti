import { useEffect, useState } from "react";
import { SpeakerArray } from "../constants";

const SpeakerGallery = ({ comingSoon = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTextIndex, setShowTextIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const isMobile = windowWidth < 640;

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTextIndex(activeIndex);
    }, 300);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <div className="w-full py-8">
      {comingSoon && (
        <h2 className="text-4xl text-start font-extrabold text-red font-bricolage uppercase tracking-widest mb-8 animate-pulse">
          Anticipate!
        </h2>
      )}

  <div className="flex px-4 flex-col sm:flex-row sm:flex-nowrap items-center sm:justify-center justify-start sm:overflow-x-auto gap-4">
        {SpeakerArray.map((speaker, index) => {
          const isActive = index === activeIndex;
          const showText = index === showTextIndex;

          // Compute percentage widths so all items together fill 98% (leave 2% gap)
          const totalItems = SpeakerArray.length;
          const foldedCount = Math.max(0, totalItems - 1);
          const totalAvailable = 95; // increased by 2% and center the gallery on desktop
          // preferred active width percent on desktop
          // NOTE: user requested active item to be about 45% of previous size (previously 60%)
          // 60 * 0.45 = 27 -> use 27% as the preferred active width
          let preferredActive = 27;
          let foldedPercent =
            foldedCount > 0 ? (totalAvailable - preferredActive) / foldedCount : 0;
          // Ensure folded items don't get too small
          const minFolded = 6; // percent
          if (foldedCount > 0 && foldedPercent < minFolded) {
            foldedPercent = minFolded;
            preferredActive = totalAvailable - foldedPercent * foldedCount;
          }

          const widthPercent = isMobile
            ? 100
            : isActive
            ? preferredActive
            : foldedPercent;

          return (
            <div
              key={index}
              onMouseEnter={() => !isMobile && setActiveIndex(index)}
              onClick={() => isMobile && setActiveIndex(index)}
              className={`relative transition-all duration-500 ease-in-out cursor-pointer rounded-xl overflow-hidden flex-shrink-0 ${comingSoon ? "bg-red-600" : ""}`}
              style={{ width: `${widthPercent}%`, height: isMobile ? "380px" : "450px" }}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className={`w-full h-full object-cover ${
                  comingSoon
                    ? "brightness-0 contrast-150 saturate-0 blur-md"
                    : "grayscale"
                }`}
              />

              {(isActive || window.innerWidth < 640) && !comingSoon && (
                <div className="absolute bottom-0 left-0 w-full h-[90px] bg-black/60 backdrop-blur-lg px-4 py-3 text-white flex flex-col justify-center items-center rounded-t-xl transition-opacity duration-300 ease-in-out">
                  {(showText || window.innerWidth < 640) && (
                    <>
                      <h3 className="font-black text-center text-2xl font-bricolage leading-tight">
                        {speaker.name}
                      </h3>
                      <p className="text-xl font-thin font-hupaisa text-center">
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
    </div>
  );
};

export default SpeakerGallery;
