import about from "../assets/about.webp";
import AboutTEDx from "../components/AboutTEDx";
import FAQSection from "../components/FAQSection";
import GetInolved from "../components/GetInolved";
import SEO from "../components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About TEDxAdo-Ekiti | Global ideas. Local voices."
        description="TEDx is a global movement rooted in the simple yet powerful belief that ideas can spark change in a room, a city, or the world. While TED began as a conference for Technology, Entertainment, and Design, it has grown into a global platform for ideas worth spreading."
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
