import FAQAccordion from "./FAQAccordion";
import redEllipse from "../assets/redEllipse.png";
import whiteEllipse from "../assets/whiteEllipse.png";

const faqData = [
  {
    question: "Where is the venue?",
    answer:
      "The event will take place at The Awolowo Civic Center, located in the heart of Ado-Ekiti, Ekiti State, Nigeria. It is a space that reflects the spirit of this gathering: grounded, open, and full of possibility.",
  },
  {
    question: "What should I wear?",
    answer:
      "TEDx is casual but intentional. Come as yourself—neat, comfortable, and ready to connect. Whether it's Ankara or denim, what matters most is that you are present and engaged. Some people dress creatively to reflect their personality. Others come low key. Both are welcome.",
  },
  {
    question: "Can anyone attend?",
    answer:
      "Yes. TEDxAdoEkiti is open to anyone with an open mind and a willingness to listen, learn, and contribute. Students, professionals, artists, builders, thinkers—if you are curious and kind, there is a seat for you.",
  },
  {
    question: "Is this a youth-only event?",
    answer:
      "Not at all. While many of our speakers and team members are young, this is a multigenerational conversation. We welcome elders, parents, teachers, and anyone who cares about the future of our communities. It is not about age; it is about imagination.",
  },
  {
    question: "Is TEDxAdoEkiti only about Ado-Ekiti?",
    answer:
      "No. While our license uses the Ado-Ekiti name, the vision goes beyond one city. The conversations are about the future of Ekiti as a whole. Ado-Ekiti, being the state capital, serves as a central point for gathering and dialogue. TEDxAdoEkiti is for everyone who believes in the future of Ekiti — wherever you are.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden py-10 flex flex-col justify-center">
      <img
        src={whiteEllipse}
        alt="Main background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <img
        src={redEllipse}
        alt="Main background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-20 h-full w-full flex  items-center flex-col gap-7 justify-center px-10 md:px-20">
        <h2>FAQs</h2>
        <div className="w-full flex flex-col gap-[15px] items-center">
          {faqData.map((item, idx) => (
            <FAQAccordion
              key={idx}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
