import React from "react";

const Card = ({ children, tittle, text, height, width }) => {
  return (
    <div
      className={
        "rounded-xl bg-gray-100 p-3 m-2  min-h-52 lg:w-[48%] shadow-sm ring-1 ring-gray-200 hover:shadow-lg duration-400 transition-all" +
        { height } +
        { width }
      }
    >
      <h2 className=" text-lg font-bold text-sky-700 "> {tittle} </h2>
      <p className="text-gray-900 text-justify my-2">{text}</p>
      <div className="my-4 text-gray-900 flex">{children}</div>
      <a href="#skills" className="font-medium">
        Read More <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default Card;
