import about from "../assets/about.png";
import AboutTEDx from "../components/AboutTEDx";
import FAQSection from "../components/FAQSection";
import GetInolved from "../components/GetInolved";

const About = () => {
  return (
    <section className="min-h-screen w-full bg-black text-white lg:mt-20">
      <div className="relative h-[278px]">
        <img
          src={about}
          alt="About TEDxAdo-Ekiti"
          className="w-full h-full object-cover bg-faint-red"
        />

        <h2 className="absolute left-8 top-1/4 -translate-y-1/2">About Us</h2>
      </div>
      <AboutTEDx />
      <GetInolved />
      <FAQSection />
    </section>
  );
};

export default About;
