import Button from "./Button";

const InvolveCard = ({ header, text, btnText, btnClassName, link }) => {
  return (
    <div className="w-[332px] h-[282px] flex flex-col justify-between border border-white-20 rounded-md px-[34px] py-[40px]">
      <div className="flex flex-col gap-5 flex-grow">
        <h2 className="text-4xl">{header}</h2>
        <p className="text-white leading-relaxed flex-grow">{text}</p>
      </div>

      <div className="mb-0">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button text={btnText} className={`${btnClassName} text-base`} />
        </a>
      </div>
    </div>
  );
};

export default InvolveCard;
