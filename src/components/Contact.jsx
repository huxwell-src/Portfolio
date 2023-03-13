import React from "react";

const Contact = () => {
  return (
    <div className="section" id="Contact">
      <div className="container mx-auto">
        <div class="md:w-3/4 w-[95%] mx-auto">
          <form class="mt-8 bg-gray-100 ring-1 ring-gray-200 rounded-xl shadow-lg overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-4">
              <label class="uppercase md:text-sm text-xs text-gray-500 font-bold">
                Nombre Completo
              </label>
              <input
                class="border py-2 px-3 text-gray-700 bg-gray-50 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Nombre"
              />

              <label class="uppercase md:text-sm text-xs text-gray-500 font-bold">
                Correo electrónico
              </label>
              <input
                class="border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Correo Electrónico"
              />

              <label class="uppercase md:text-sm text-xs text-gray-500 font-bold">
                Asunto
              </label>
              <input
                class="border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Asunto"
              />

              <label class="uppercase md:text-sm text-xs text-gray-500 font-bold">
                Mensaje
              </label>
              <textarea
                class="border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                rows="5"
                placeholder="Escribe aquí tu mensaje"
              ></textarea>
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="button"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
