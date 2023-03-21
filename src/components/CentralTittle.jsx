import React from "react";

const CentralTittle = ({ children, tittle, subtittle, text }) => {
  return (
    <div className="flex flex-col items-center w-11/12 md:w-full mx-auto ">
      <h2 className="tittle"> {tittle} </h2>
      <h3 className="subtittle"> {subtittle} </h3>
      <p className="text">{text}</p>
    </div>
  );
};

export default CentralTittle;
