import FAQSection from "../components/FAQSection";
import Hero from "../components/Hero";
import SponsorMarquee from "../components/SponsorMarquee";
import svg from "../assets/teams/Group.svg";
import Button from "../components/Button";
import Voices from "../components/Voices";
import PanelistView from "../components/PanelistView";
import Tickets from "../components/Tickets";
import WhyAttend from "../components/WhyAttend";
import MeetTheTeam from "../components/MeetTheTeam";
import JoinCommunitySection from "../components/JoinCommunity";
import EventCountdown from "../components/EventCountdown";

const Home = () => {
  return (
    <section className="w-full text-white bg-black">
      <Hero />
      <div className="p-[60px] bg-white/5 flex flex-col">
        <SponsorMarquee />
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col max-lg:items-center w-[40%]">
            <p className="text-4xl max-lg:text-3xl font-bold font-bricolage mt-5 flex flex-col max-lg:flex-row items-start max-lg:items-center gap-0 justify-center flex-wrap">
              Connecting Places:
              <span className="font-hupaisa items-center gap-1 flex-wrap justify-center flex">
                <span className="flex gap-0 items-center">
                  R
                  <img
                    src={svg}
                    alt="svg"
                    className="w-10 lg:w-25 md:w-20 sm:w-5 inline-block"
                  />
                  ts
                </span>{" "}
                to Horizons
              </span>
            </p>
            <p className="text-2xl max-lg:text-center font-hupaisa">
              This is not just a theme. It is a path
              <br />
              We are learning to stop fleeing where we came from and
              <br />
              begin building from it.
              <br />
              To see small cities not as detours, but as destination
              <br />
              To see our memories not as baggage, but as blueprint
              <br />
              This theme holds a promise: that something powerful
              <br />
              happens when you root your dreams in place
            </p>
            <div className="flex flex-row max-lg:justify-center w-full flex-wrap mt-10 gap-5">
              <Button text="Get your tickets" className="btn-orange" />
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdkWuXtdkrJaSd-fWJq6qIYdUbIXCO2lN18_Rpg87TV-OjVqg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="Partner with us" className="btn-black" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center text-center w-[40%]">
            <EventCountdown targetDate="2025-09-20T00:00:00" />
          </div>
        </div>
      </div>
      <Voices />
      <PanelistView />
      <FAQSection />
      <Tickets />
      <WhyAttend />
      <MeetTheTeam />
      <JoinCommunitySection />
    </section>
  );
};

export default Home;
