import React from "react";
import InvolveCard from "./InvolveCard";

const GetInolved = () => {
  return (
    <div className="py-[150px] mx-[100px] flex flex-col gap-[50px] items-center">
      <h2>Get Involved</h2>
      <div className="flex flex-row flex-wrap gap-[20px]">
        <InvolveCard
          header="Attend"
          text="Be in the Room Where Ideas Ignite. Claim your seat and experience the power of live TEDx talks in Ado-Ekiti."
          btnText="Get your ticket"
          btnClassName="btn-orange"
        />
        <InvolveCard
          header="Partner"
          text="Fuel the Future with Us. Support a movement shaping minds, sparking innovation, and transforming our city."
          btnText="Partner with us"
          btnClassName="btn-black"
        />
        <InvolveCard
          header="Join the trybe"
          text="Find Your People. Build the Future. Be part of a growing circle of thinkers, doers, and dreamers driving change from Ekiti to the world."
          btnText="Join our community"
          btnClassName="btn-black"
        />
      </div>
    </div>
  );
};

export default GetInolved;
