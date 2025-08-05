import about from "../assets/about.webp";
import AboutTEDx from "../components/AboutTEDx";
import FAQSection from "../components/FAQSection";
import GetInolved from "../components/GetInolved";
import SEO from "../components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About TEDxAdo-Ekiti | Why We Exist"
        description="TEDxAdo-Ekiti isn't just an event. It's a spark. Learn about our mission to spotlight untold stories and overlooked brilliance from Ekiti to the world."
      />

      <section className="min-h-screen w-full bg-black text-white lg:mt-20">
        <div className="relative h-[278px]">
          <img
            src={about}
            alt="About TEDxAdo-Ekiti"
            className="w-full h-full object-cover bg-faint-red"
          />

          <h1 className="absolute left-8 max-lg:top-2/4 top-1/4 -translate-y-1/2 font-bricolage text-5xl font-bold">
            About Us
          </h1>
        </div>
        <AboutTEDx />
        <GetInolved />
        <FAQSection />
      </section>
    </>
  );
};

export default About;
