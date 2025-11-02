import React, { useEffect, useState, useRef } from "react";
import { sponsors } from "../constants";
import "../styles/marquee.css";

const Marquee = () => {
  const containerRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(4);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;

    const tempSpan = document.createElement("span");
    tempSpan.style.visibility = "hidden";
    tempSpan.style.position = "absolute";
    tempSpan.style.whiteSpace = "nowrap";

    sponsors.forEach((s) => {
      const img = document.createElement("img");
      img.src = s.icon;
      img.style.height = "100px";
      img.style.marginRight = "32px";
      tempSpan.appendChild(img);
    });

    document.body.appendChild(tempSpan);
    const sponsorSetWidth = tempSpan.offsetWidth;
    document.body.removeChild(tempSpan);

    const minRepeats = Math.ceil((containerWidth * 2) / sponsorSetWidth);
    setRepeatCount(minRepeats);
  }, []);

  const repeatedSponsors = Array.from(
    { length: repeatCount },
    () => sponsors
  ).flat();

  return (
    <div className="marquee-wrapper mb-10">
      <div className="marquee-fade-left" />
      <div className="marquee-fade-right" />

      <div className="marquee" ref={containerRef}>
        <div className="marquee-content">
          {repeatedSponsors.map((sponsor, index) => (
            <div key={index} className="marquee-item-wrapper">
              <div
                className="sponsor-circle"
                style={{
                  backgroundColor:
                    sponsor.color === "light" ? "#ffffff" : "transparent",
                }}
              >
                <img
                  src={sponsor.icon}
                  alt={sponsor.name}
                  className="marquee-item"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
