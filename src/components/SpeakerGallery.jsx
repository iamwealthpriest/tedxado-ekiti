import { useEffect, useState } from "react";
import { SpeakerArray } from "../constants";
import SpeakerModal from "./SpeakerModal";

const SpeakerGallery = ({ speakers = SpeakerArray, maxItems = undefined }) => {
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

  // limit items if maxItems provided
  const items = typeof maxItems === "number" ? speakers.slice(0, maxItems) : speakers;
  const [modalSpeaker, setModalSpeaker] = useState(null);

  return (
    <div className="w-full py-8">

  <div className="flex px-4 flex-col sm:flex-row sm:flex-nowrap items-center sm:justify-center justify-start sm:overflow-x-auto gap-4">
        {items.map((speaker, index) => {
          const isActive = index === activeIndex;
          const showText = index === showTextIndex;

          // Compute percentage widths so all items together fill 95% (leave small gap)
          const totalItems = items.length;
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
              onClick={() => setModalSpeaker(speaker)}
              className={`relative transition-all duration-500 ease-in-out cursor-pointer rounded-xl overflow-hidden flex-shrink-0`}
              style={{ width: `${widthPercent}%`, height: isMobile ? "380px" : "450px" }}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className={`w-full h-full object-cover grayscale`}
              />

              {(isActive || window.innerWidth < 640) && (
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
      {modalSpeaker && (
        <SpeakerModal speaker={modalSpeaker} onClose={() => setModalSpeaker(null)} />
      )}
    </div>
  );
};

export default SpeakerGallery;
