import { whyAttendReasons } from "../constants/whyAttend";

const WhyAttend = () => {
  const firstColumn = whyAttendReasons.slice(0, 2);
  const secondColumn = whyAttendReasons.slice(2, 4);

  return (
    <div className="px-[60px] max-lg:px-[20px] py-30">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="w-full lg:w-1/3">
          <h2 className="text-5xl font-bold font-bricolage leading-tight">
            Why Attend <span className="text-red">TEDxAdoEkiti?</span>
          </h2>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {[firstColumn, secondColumn].map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-10">
              {column.map((item, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-15 h-15 object-contain"
                  />
                  <h3 className="text-4xl font-bricolage font-bold">
                    {item.title}
                  </h3>
                  <p className="text-2xl">{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAttend;
