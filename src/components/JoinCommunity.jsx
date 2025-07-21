import bg from "../assets/home/Cta-bg.png";
import Button from "./Button";

const JoinCommunitySection = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat flex flex-col items-start gap-5 text-white px-[60px] py-16 md:py-24"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2 className="text-5xl font-light text-red">Join our community</h2>
      <p className="text-xl text-white/90">
        Be part of a growing network turning Ado-Ekiti into a beacon of
        innovation and possibility.
      </p>
      <p className="text-xl text-white/80">
        We’re connecting dreamers, doers, and disruptors from deep roots to
        distant horizons. If you <br />
        believe transformation can start anywhere, start here.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
        <div className="flex items-center bg-white/10 rounded-xl overflow-hidden w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 bg-transparent text-white placeholder-white/60 focus:outline-none"
          />
          <Button
            text="Subscribe"
            className="btn-orange text-[16px] py-[5px] px-[8px] border-b-2 border-r-2 rounded-md"
          />
        </div>

        <div className="text-white text-sm sm:text-base">OR</div>

        <a
          href="https://chat.whatsapp.com/H3UsHi8bT34DEkMh1lLxVn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-hupaisa text-white text-[20px] font-light opacity-100 hover:opacity-80 py-[10px] px-[20px] border-b-2 border-r-2 rounded-md transition-all bg-dark-grey border-red w-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M20.52 3.48A11.85 11.85 0 0 0 12 0C5.37 0 0 5.37 0 12a11.88 11.88 0 0 0 1.64 6.06L0 24l6.17-1.62A11.83 11.83 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.66 0-3.28-.4-4.7-1.17l-.34-.18-3.66.96.98-3.56-.2-.37A9.89 9.89 0 0 1 2 12c0-5.52 4.48-10 10-10 2.67 0 5.19 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.18-7.6c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.18.28-.73.9-.9 1.08-.17.18-.34.2-.63.07-.28-.14-1.18-.43-2.24-1.39a8.28 8.28 0 0 1-1.53-1.9c-.16-.27-.02-.42.12-.56.12-.13.28-.34.42-.5.14-.17.2-.28.28-.46.1-.18.05-.35-.02-.5-.07-.14-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49l-.55-.01c-.17 0-.45.06-.69.35-.24.28-.9.9-.9 2.2s.92 2.54 1.04 2.72c.14.18 1.82 2.78 4.42 3.9.62.27 1.1.43 1.48.55.62.2 1.2.17 1.65.1.5-.07 1.54-.63 1.76-1.24.22-.6.22-1.1.15-1.23-.06-.14-.24-.22-.52-.36z"
            />
          </svg>
          <p className="text-[16px] leading-none">Join on Whatsapp</p>
        </a>
      </div>
    </section>
  );
};

export default JoinCommunitySection;
