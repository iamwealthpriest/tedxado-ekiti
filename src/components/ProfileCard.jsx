import { useEffect, useRef, useState } from "react";
import ImageWrapper from "./ImageWrapper.jsx";
import silhouette from "../assets/teams/omisore.png";

const ProfileCard = ({ image, name, role, comingSoon = false }) => {
  const [scrambledName, setScrambledName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  const generateRandomString = (length = 8) =>
    Array.from(
      { length },
      () => characters[Math.floor(Math.random() * characters.length)]
    ).join("");

  useEffect(() => {
    if (!comingSoon) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [comingSoon]);

  useEffect(() => {
    if (!comingSoon || !isVisible) return;

    let current = generateRandomString(8);
    setScrambledName(current);

    const interval = setInterval(() => {
      current = current
        .split("")
        .map((char) =>
          Math.random() > 0.7
            ? characters[Math.floor(Math.random() * characters.length)]
            : char
        )
        .join("");
      setScrambledName(current);
    }, 200);

    return () => clearInterval(interval);
  }, [comingSoon, isVisible]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col relative overflow-hidden w-[403px] h-[559px]"
    >
      <ImageWrapper image={image} alt={name} comingSoon={comingSoon} />
      <div className="absolute left-13 bottom-0 flex flex-col gap-2 z-10">
        <p className="text-4xl text-white font-bricolage tracking-wider transition-all duration-300">
          {comingSoon ? scrambledName : name}
        </p>
        <p className="text-white/70 text-xl font-hupaisa font-light">{role}</p>
      </div>
      {comingSoon && (
        <div className="absolute top-6 right-6 z-20">
          <div className="bg-red/90 text-white px-5 py-1.5 rounded-full shadow-md backdrop-blur-md border border-white/20 animate-pulse">
            <span className="text-sm font-bricolage tracking-[0.15em] uppercase">
              Anticipate
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
