import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const Card = ({
  children,
  tittle,
  text,
  height,
  width,
  icon,
  flex,
  read,
  readmore,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`relative rounded-xl mx-5 md:mx-0 bg-gray-100 flex flex-col justify-around p-3 m-2 shadow-sm ring-1 ring-gray-200 hover:shadow-lg duration-400 transition-all  
      ${height} ${width} ${flex}`}
    >
      <i className={icon}></i>

      <h2 className=" text-lg font-bold text-sky-700 "> {tittle} </h2>
      <p className="text-gray-900 text-justify my-2 text-[15px] ">{text}</p>
      <div className="my-4 text-gray-900 flex">{children}</div>
      <button
        className={`font-medium ${readmore ? "block" : "hidden"} ${read}`}
      >
        Read More <i className="fa-solid fa-arrow-right"></i>
      </button>
    </button>
  );
};

export default Card;
