import { useEffect } from "react";

const SpeakerModal = ({ speaker, onClose }) => {
  if (!speaker) return null;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.dataset.role === "overlay") onClose();
  };

  return (
    <div
      data-role="overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
    >
      <div
        className="relative max-w-4xl w-full bg-black border border-white/10 rounded-lg shadow-xl flex flex-col md:flex-row"
        style={{ maxHeight: "85vh" }} // slightly more breathing room
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close speaker modal"
          className="absolute top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-md border border-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05A1 1 0 015.05 3.636L10 8.586z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Image Side - Fixed */}
        <div className="w-full md:w-1/2 flex-shrink-0 bg-black flex items-center justify-center overflow-hidden">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content Side - Scrollable Bio */}
        <div className="w-full md:w-1/2 flex flex-col h-full md:h-auto">
          <div className="p-6 flex-shrink-0">
            <h2 className="text-3xl font-bricolage text-white mb-2">{speaker.name}</h2>
            <p className="text-lg font-hupaisa text-white/80 mb-4">{speaker.position}</p>
          </div>

          {/* Scrollable Bio Area */}
          <div className="flex-1 overflow-y-auto px-6 pb-6 text-white/90 text-base leading-relaxed">
            {speaker.bio ? (
              <p className="whitespace-pre-line">{speaker.bio}</p>
            ) : (
              <p className="italic text-white/60">No biography available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;