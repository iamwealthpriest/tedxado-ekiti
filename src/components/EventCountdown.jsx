import { useEffect, useState } from "react";

const Countdown = () => {
  const eventDate = new Date("2025-11-15T00:00:00");
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
    <div className="w-full flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-md rounded-3xl shadow-xl border border-white/10 px-6 py-10 max-sm:px-4 max-sm:py-6">
        {eventStatus === "counting-down" && (
          <div className="flex gap-4 sm:gap-6 flex-row justify-center items-center flex-wrap">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="bg-white/10 text-red font-bricolage text-6xl sm:text-5xl max-sm:text-4xl rounded-2xl shadow-lg px-4 py-3 w-[90px] h-[110px] sm:w-[100px] sm:h-[120px] max-sm:w-[70px] max-sm:h-[90px] flex items-center justify-center">
                  {timeLeft[unit]?.toString().padStart(2, "0")}
                </div>
                <span className="mt-2 text-sm sm:text-base text-gray-400 font-hupaisa uppercase tracking-widest">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        )}

        {eventStatus === "live" && (
          <h2 className="text-5xl sm:text-6xl text-red font-bricolage text-center max-sm:text-3xl">
            🚨TEDxAdoEkiti is LIVE
          </h2>
        )}

        {eventStatus === "past" && (
          <h2 className="text-4xl sm:text-5xl text-white font-bricolage text-center max-sm:text-2xl">
            {timeLeft.daysAgo} day{timeLeft.daysAgo > 1 ? "s" : ""} ago
          </h2>
        )}
      </div>
    </div>
  );
};

export default Countdown;
