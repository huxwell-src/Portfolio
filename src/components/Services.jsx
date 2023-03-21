import React from "react";
import CentralTittle from "./CentralTittle";
import Card from "./Card";

const Services = () => {
  const width = "lg:w-[30%]";
  const height = "md:min-h-[240px] lg:my-4";
  const bgIcon =
    "text-2xl my-1 text-gray-50 bg-sky-500 p-5 h-[55px] w-[55px] flex justify-center items-center rounded-full";
  return (
    <div className="section" id="Services">
      <div className="container mx-auto ">
        <CentralTittle
          tittle="Service"
          subtittle="What are my services?"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum voluptatum sed quas sapiente natus magnam provident amet, veritatis rem cumque mollitia sint delectus! Accusamus deleniti earum nobis itaque eius. "
        ></CentralTittle>
        <div className="flex flex-wrap flex-col md:flex-row justify-around  items-center">
          <Card
            flex="items-center"
            icon={` fa-solid fa-code ${bgIcon} `}
            height={height}
            width={width}
            read="ml-auto"
            tittle="Web Development"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum voluptatum sed quas sapiente natus magnam provident amet, veritatis rem cumque mollitia sint delectus! Accusamus deleniti earum nobis itaque eius. "
          ></Card>
          <Card
            flex="items-center"
            icon={` fa-solid fa-swatchbook ${bgIcon} `}
            height={height}
            width={width}
            read="ml-auto"
            tittle="Web Desing"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum voluptatum sed quas sapiente natus magnam provident amet, veritatis rem cumque mollitia sint delectus! Accusamus deleniti earum nobis itaque eius. "
          ></Card>
          <Card
            flex="items-center"
            icon={` fa-solid fa-cart-shopping ${bgIcon} `}
            height={height}
            width={width}
            read="ml-auto"
            tittle="E-Commerce"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum voluptatum sed quas sapiente natus magnam provident amet, veritatis rem cumque mollitia sint delectus! Accusamus deleniti earum nobis itaque eius. "
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
