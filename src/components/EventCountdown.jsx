import { useEffect, useState } from "react";

const Countdown = () => {
  const eventDate = new Date("2025-09-20T00:00:00");
  const [timeLeft, setTimeLeft] = useState({});
  const [eventStatus, setEventStatus] = useState("");

  const calculateTime = () => {
    const now = new Date();
    const difference = eventDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
      setEventStatus("counting-down");
    } else {
      const daysAgo = Math.floor((now - eventDate) / (1000 * 60 * 60 * 24));
      if (daysAgo === 0) {
        setEventStatus("live");
      } else {
        setEventStatus("past");
        setTimeLeft({ daysAgo });
      }
    }
  };

  useEffect(() => {
    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center text-center px-4 py-10">
      {eventStatus === "counting-down" && (
        <div className="flex gap-8 flex-wrap justify-center">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div key={unit} className="flex flex-col items-center">
              <span className="text-6xl md:text-7xl lg:text-8xl font-bricolage text-red">
                {timeLeft[unit]?.toString().padStart(2, "0")}
              </span>
              <span className="text-lg md:text-xl lg:text-2xl text-gray-400 font-hupaisa uppercase tracking-widest">
                {unit}
              </span>
            </div>
          ))}
        </div>
      )}

      {eventStatus === "live" && (
        <h2 className="text-6xl md:text-7xl text-red font-bricolage">
          🚨TEDxAdoEkiti is LIVE
        </h2>
      )}

      {eventStatus === "past" && (
        <h2 className="text-4xl md:text-5xl text-white font-bricolage">
          {timeLeft.daysAgo} day{timeLeft.daysAgo > 1 ? "s" : ""} ago
        </h2>
      )}
    </div>
  );
};

export default Countdown;
