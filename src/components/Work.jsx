import React from "react";
import CentralTittle from "./CentralTittle";

const Work = () => {
  return (
    <section className="section" id="Portfolio">
      <div className="container mx-auto">
        <div className="mb-[-25px]">
          <CentralTittle
            tittle="Portfolio"
            subtittle="What can i do?"
          ></CentralTittle>
        </div>
        <div className="section-flex">
          <div className="w-11/12 md:w-1/2 h-96 bg-indigo-600"></div>
          <div className="w-11/12 md:w-1/2 h-96 bg-orange-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Work;
