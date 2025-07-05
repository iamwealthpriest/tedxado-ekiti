import about from "../assets/about.png";

const About = () => {
  return (
    <section className="min-h-screen w-full bg-black text-white">
      <div className="relative h-[278px]">
        <img
          src={about}
          alt="About TEDxAdo-Ekiti"
          className="w-full h-full object-cover bg-faint-red"
        />

        <h1 className="absolute left-8 top-1/4 -translate-y-1/2">About Us</h1>
      </div>

      <div className="flex flex-col gap-[24px] px-10 mt-20">
        <h1>
          About <span className="red-text">TEDx</span>
        </h1>
        <p className="text-4xl">Global ideas. Local voices.</p>
        <p className="text-2xl">
          TEDx is a global movement rooted in the simple yet powerful belief
          that ideas can spark change in a room, a city, or the world. While TED
          began as a conference for Technology, Entertainment, and Design, it
          has grown into a global platform for ideas worth spreading.
        </p>
        <p className="text-2xl">
          In the spirit of that mission, TEDx was created. It is a program of
          independently organized events that bring people together to share a
          TED-like experience at the local level. TEDx events are licensed by
          TED but self-organized by local volunteers who curate live speakers,
          TED Talks, and meaningful conversations tailored to their communities.
        </p>
      </div>
      <div className="flex flex-col gap-[24px] px-10 mt-20">
        <h1>
          About <span className="red-text">TEDx</span> Ado-Ekiti
        </h1>
        <p className="text-2xl">
          For years, Ekiti has been called quiet. Remote. Passed over. But we
          see it differently. We see a seedbed. We believe ideas don’t only come
          from capital cities. That brilliance isn’t bound by traffic lights or
          skyscrapers. That the places we come from still hold the power to
          shape where we are going.
        </p>
        <p className="text-2xl">
          TEDxAdoEkiti is more than an event. It is a signal. A shift. A chance
          to make the world look again. At Ekiti. At overlooked places. At
          people who stayed. <br />
          <span className="red-text">
            Because here in this dry land, something fertile is rising.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
