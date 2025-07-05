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
    question: "Where is the venue?",
    answer:
      "The event will take place at The Awolowo Civic Center, located in the heart of Ado-Ekiti, Ekiti State, Nigeria. It is a space that reflects the spirit of this gathering: grounded, open, and full of possibility.",
  },
  {
    question: "Where is the venue?",
    answer:
      "The event will take place at The Awolowo Civic Center, located in the heart of Ado-Ekiti, Ekiti State, Nigeria. It is a space that reflects the spirit of this gathering: grounded, open, and full of possibility.",
  },
  {
    question: "Where is the venue?",
    answer:
      "The event will take place at The Awolowo Civic Center, located in the heart of Ado-Ekiti, Ekiti State, Nigeria. It is a space that reflects the spirit of this gathering: grounded, open, and full of possibility.",
  },
  {
    question: "Where is the venue?",
    answer:
      "The event will take place at The Awolowo Civic Center, located in the heart of Ado-Ekiti, Ekiti State, Nigeria. It is a space that reflects the spirit of this gathering: grounded, open, and full of possibility.",
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
