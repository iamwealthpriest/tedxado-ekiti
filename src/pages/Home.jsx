import { lazy, Suspense } from "react";
import svg from "../assets/teams/Group.svg";
import Button from "../components/Button";
import EventCountdown from "../components/EventCountdown";
import Hero from "../components/Hero";
import SEO from "../components/SEO";

const Voices = lazy(() => import("../components/Voices"));
const PanelistView = lazy(() => import("../components/PanelistView"));
const FAQSection = lazy(() => import("../components/FAQSection"));
const Tickets = lazy(() => import("../components/Tickets"));
const WhyAttend = lazy(() => import("../components/WhyAttend"));
const MeetTheTeam = lazy(() => import("../components/MeetTheTeam"));
const JoinCommunitySection = lazy(() => import("../components/JoinCommunity"));

const Home = () => {
  return (
    <>
      <SEO
        title="TEDxAdo-Ekiti 2025 | Global Ideas. Local Voices."
        description="Join TEDxAdo-Ekiti 2025, an idea-packed experience spotlighting bold voices from Ekiti, Nigeria. Discover speakers, grab tickets, and be part of the movement."
      />

      <section className="w-full text-white bg-black">
        <Hero />

        <div className="p-[60px] bg-white/5 flex flex-col">
          <div className="flex flex-row justify-between max-lg:flex-col">
            <div className="flex flex-col max-lg:items-center min-w-[40%]">
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

              <p className="text-2xl max-lg:text-center font-hupaisa mt-5">
                This is not just a theme. It is a path. <br />
                We are learning to stop fleeing where we came from and <br />
                begin building from it. <br />
                To see small cities not as detours, but as destinations. <br />
                To see our memories not as baggage, but as blueprint. <br />
                This theme holds a promise: that something powerful <br />
                happens when you root your dreams in place.
              </p>

              <div className="flex flex-row max-lg:justify-center w-full flex-wrap mt-10 gap-5">
                <a
                  href="https://attendout.com/c/TedXAdoEkiti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button text="Get your tickets" className="btn-orange" />
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdkWuXtdkrJaSd-fWJq6qIYdUbIXCO2lN18_Rpg87TV-OjVqg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button text="Partner with us" className="btn-black" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center text-center min-w-[40%]">
              <EventCountdown targetDate="2025-09-20T00:00:00" />
            </div>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="text-white text-center py-10">Loading...</div>
          }
        >
          <Voices />
          <PanelistView />
          <FAQSection />
          <Tickets />
          <WhyAttend />
          <MeetTheTeam />
          <JoinCommunitySection />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
