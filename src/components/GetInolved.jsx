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
          link="https://buytickets.com"
        />
        <InvolveCard
          header="Partner"
          text="Fuel the Future with Us. Support a movement shaping minds, sparking innovation, and transforming our city."
          btnText="Partner with us"
          btnClassName="btn-black"
          link="https://docs.google.com/forms/d/e/1FAIpQLSdkWuXtdkrJaSd-fWJq6qIYdUbIXCO2lN18_Rpg87TV-OjVqg/viewform"
        />
        <InvolveCard
          header="Join the trybe"
          text="Find your people. Build the future. Join a circle of thinkers, doers, and dreamers of change."
          btnText="Join our community"
          btnClassName="btn-black"
          link="https://chat.whatsapp.com/H3UsHi8bT34DEkMh1lLxVn"
        />
      </div>
    </div>
  );
};

export default GetInolved;
