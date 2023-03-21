import React, { useState, useRef, useEffect } from "react";
import CentralTittle from "./CentralTittle";

const Contact = () => {
  const [divHeight, setDivHeight] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      setDivHeight(divRef.current.clientHeight);
    }
  }, []);

  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    asunto: "",
    razon: "",
    mensaje: "",
  });

  const manejarCambios = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="section" id="Contact">
      <div className="container mx-auto">
        <div className="mb-[-25px]">
          <CentralTittle
            tittle="Contacto"
            subtittle="What are my skills?"
          ></CentralTittle>
        </div>
        <div className="flex justify-around mb-16 ">
          <div
            ref={divRef}
            className="w-11/12 md:w-2/4  lg:w-1/3 mx-5 lg:my-0 bg-gray-100 p-6 rounded-2xl shadow-md ring-1 ring-gray-200"
          >
            <form action="" className="flex flex-col space-y-2">
              <label htmlFor="" className="mb-2 font-bold">
                Nombre
                <input
                  type="text"
                  className="form "
                  name="nombre"
                  value={datos.nombre}
                  onChange={manejarCambios}
                />
              </label>
              <label htmlFor="" className="mb-2 font-bold">
                Asunto
                <input
                  type="text"
                  className="form"
                  name="asunto"
                  value={datos.asunto}
                  onChange={manejarCambios}
                />
              </label>
              <label htmlFor="" className="mb-2 font-bold">
                Email
                <input
                  type="email"
                  className="form"
                  name="email"
                  value={datos.email}
                  onChange={manejarCambios}
                />
              </label>
              <div className="flex flex-col">
                <label className="mb-2 font-bold">Razon</label>
                <div className="flex flex-row">
                  <label className="inline-flex items-center mr-6">
                    <input
                      type="radio"
                      className="form-radio text-blue-500"
                      name="contacto"
                      checked={datos.razon === "contacto"}
                      onChange={manejarCambios}
                    />
                    <span className="ml-2">Contacto</span>
                  </label>
                  <label className="inline-flex items-center mr-6">
                    <input
                      type="radio"
                      className="form-radio text-blue-500"
                      name="pregunta"
                      checked={datos.razon === "pregunta"}
                      onChange={manejarCambios}
                    />
                    <span className="ml-2">Pregunta</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-blue-500"
                      name="problema"
                      checked={datos.razon === "problema"}
                      onChange={manejarCambios}
                    />
                    <span className="ml-2">Problemas</span>
                  </label>
                </div>
              </div>
              <label htmlFor="" className="mb-2 font-bold">
                Mensaje
                <textarea
                  name="mensaje"
                  className="resize-none ring-1 ring-gray-200 bg-gray-50 rounded-2xl py-2 px-5  text-gray-700 focus:outline-sky-700/75  shadow-sm w-full"
                  id=""
                  rows="5"
                  value={datos.mensaje}
                  onChange={manejarCambios}
                ></textarea>
              </label>
              <div className="text-end">
                <input
                  type="submit"
                  value="Enviar"
                  className="btn btn-sm w-32"
                ></input>
              </div>
            </form>
          </div>

          <div
            style={{ height: divHeight }}
            className=" w-2/4 lg:my-0 lg:w-1/3 hidden md:flex bg-gray-900/80 p-6 rounded-2xl shadow-md relative"
          >
            <div className="flex space-x-2 ">
              <div className="h-4 w-4 bg-red-600 rounded-full"></div>
              <div className="h-4 w-4 bg-amber-400 rounded-full"></div>
              <div className="h-4 w-4 bg-green-500 rounded-full"></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
