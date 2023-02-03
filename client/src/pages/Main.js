import React from "react";
import Header from "../components/Header";
import nah from "../nah.png";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      <Header />
      <div className=" m-20 flex flex-col justify-around md:flex-row items-center">
        <div className="w-1/2">
          {" "}
          <img src={nah} className="" />
          <p className="text-4xl font-dancing-script text-blue-1000 font-bold text-center">
            {" "}
            You gotta nourish to flourish{" "}
          </p>
        </div>
        <div className="text-center text-3xl font-bold">
          Self-growth relies<br></br>on self-love{" "}
        </div>
      </div>
    </div>
  );
};

export default Main;
