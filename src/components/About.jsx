import React from "react";
import CentralTittle from "./CentralTittle";
import PhotoStack from "./PhotoStack";

const About = () => {
  const images = [
    "https://source.unsplash.com/random/800x800/?nature",
    "https://source.unsplash.com/random/800x800/?travel",
    "https://source.unsplash.com/random/800x800/?food",
    "https://source.unsplash.com/random/800x800/?architecture",
    "https://source.unsplash.com/random/800x800/?fashion",
  ];

  return (
    <section className="section" id="About">
      <div className="container mx-auto">
        <div className="mb-8">
          <CentralTittle tittle="About" subtittle="Who am i?"></CentralTittle>
        </div>
        <div className="flex justify-around items-center flex-col-reverse md:flex-row ">
          <PhotoStack images={images} />
          <div className="w-11/12 md:w-1/2 h-96 bg-orange-500 mb-8 md:mb-0 "></div>
        </div>
      </div>
    </section>
  );
};

export default About;
