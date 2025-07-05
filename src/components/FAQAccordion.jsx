import { useState } from "react";
import dropdown from "../assets/dropdown.svg";
import dropdown2 from "../assets/dropdown2.svg";

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-orange/25 rounded-2xl mb-4 p-2 overflow-hidden transition-all w-3/5 ${
        isOpen
          ? "border-b-2 border-r-2 border-orange shadow-[4px_4px_10px_#ff2b0655]"
          : "border"
      } overflow-hidden`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-2 text-left font-poppins text-white"
      >
        <span
          className={`font-medium transition-all duration-300 ease-in-out ${
            isOpen ? "text-3xl" : "text-2xl"
          }`}
        >
          {question}
        </span>
        {isOpen ? <img src={dropdown2} /> : <img src={dropdown} />}
      </button>

      <div
        className={`px-4 text-gray-300 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
        } overflow-hidden`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQAccordion;
