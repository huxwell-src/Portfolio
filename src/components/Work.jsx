import React from "react";
import CentralTittle from "./CentralTittle";

const Work = () => {
  return (
    <section className="section" id="About">
      <div className="container mx-auto">
        <div className="mb-8">
          <CentralTittle
            tittle="Portfolio"
            subtittle="What can i do?"
          ></CentralTittle>
        </div>
        <div className="flex justify-around">
          <div className="w-1/2 h-96 bg-indigo-600"></div>
          <div className="w-1/2 h-96 bg-orange-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Work;
