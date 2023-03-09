import React from "react";
import foto from "../assets/img/avatar-116409f1272f7623386c4a732e2519bf.png";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const rrss = [
    {
      name: "Linkedin",
      icon: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/in/nicolas-gonzalez-berrios/",
    },
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/huxwell-src",
    },
  ];
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="Home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:gap-y-12 lg:flex-row lg:items-center ">
          {/* Texto */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-bold text-dark-blue dark:text-white text-4xl lg:text-6xl leading-[0.8] ">
              Nicolas <span>Gonzalez</span>
            </h1>
            <div className="mb-6 text-3xl lg:text-5xl font-semibold uppercase leading-[1] ">
              <span className="mr-2 text-dark-blue dark:text-white  ">
                I am a
              </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Administrator",
                  2000,
                ]}
                speed={50}
                className="text-light-blue"
                wrapper="span"
                repeat={Infinity}
              />

              {/* Presentacion */}
              <p className="mb-8 mt-6 text-base mx-auto text-hyper-dark-blue dark:text-white lg-mx-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit eveniet vero nostrum, iste repudiandae nemo qui
                asperiores.
              </p>

              {/* Boton de contacto */}
              <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 ">
                <button className="btn btn-lg mb-4">Contact me</button>
              </div>

              {/* RRSS */}
              <div className="flex gap-x-6 max-w-max mx-auto lg:mx-0 ">
                {rrss.map((rrss) => (
                  <a
                    href={rrss.url}
                    className="text-4xl my-4 text-dark-blue dark:text-white hover:text-light-blue transition-all duration-300"
                    target="_blank"
                  >
                    <i className={rrss.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Foto */}
          <div className="hidden lg:flex flex-1 ">
            <img src={foto} alt="" className="rounded-full max-h-[500px] " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
