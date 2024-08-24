import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end" >
        <img src="public/assets/Blue-Shape.svg" alt="1st" className="-rotate-[45deg] h-64 md:h-72  lg:h-[400p]" />
        <img src="public/assets/Pink-Shape.svg" alt="2nd" className="absolute -rotate-[30deg] h-64 md:h-72  lg:h-[400p]"/>
        <img src="public/assets/Purple-Shape.svg" alt="3rd" className="absolute -rotate-[15deg] h-64 md:h-72  lg:h-[400p]" />
        <img src="public/assets/Hero-Model.png" alt="hero" className="absolute h-64 md:h-72 lg:h-[400p]"/>
      </div>

      <div className="lg:flex1 lg:order-1">
        <h1 className="text-5xl font-bold font-palyfair leading-tight">Host your website in less than 5 minutes</h1>
        <p className="font-lato text-grey-400">With Hoste, get your website up and running in no leas than 5 minutes with the most competitive pricing packages available online. </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input className="rounded-md px-4 py-3 placeholder:text-grey-400" type="email" placeholder="Enter email address" />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">join waitlist</button>
        </form>
        <div className="flex gap-4 ">
          <img className="px-1 py-1" src="public/assets/Checkmark.svg" alt="checkmark" />
          <p>No.spam,ever.Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
