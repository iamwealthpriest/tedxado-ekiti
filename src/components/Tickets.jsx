import { homeTickets } from "../constants";
import Button from "./Button";

const Tickets = () => {
  return (
    <div className="px-[60px] max-lg:px-[20px] py-20 flex flex-col items-center">
      <div className="flex flex-col text-center gap-5 pb-16">
        <h2 className="text-5xl font-bold font-bricolage">
          Join the Gathering
        </h2>
        <p className="text-2xl max-w-2xl">
          TEDxAdoEkiti is not a show. It’s a collision of minds, hearts, and
          ideas in motion.
        </p>
      </div>

      <div className="-mx-[60px] max-lg:-mx-[20px] flex flex-col gap-6 items-center">
        {homeTickets.map((ticket, index) => (
          <a
            key={index}
            href={ticket.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-[1.01] w-full max-w-[900px]"
          >
            <img
              src={ticket.image}
              alt={`${ticket.name} Ticket`}
              className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-xl"
            />
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center mt-14">
        <Button text="Get your ticket" className="btn-orange" />
      </div>
    </div>
  );
};

export default Tickets;
