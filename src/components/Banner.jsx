import * as React from "react";
import foto from "../assets/img/avatar-116409f1272f7623386c4a732e2519bf.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

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
            <h1 className="font-bold text-sky-800 dark:text-gray-200 text-4xl lg:text-6xl leading-[0.8] ">
              Nicolas <span>Gonzalez</span>
            </h1>
            <div className="mb-6 text-3xl lg:text-5xl font-semibold uppercase leading-[1] ">
              <span className="mr-2 text-sky-800 dark:text-gray-200  ">
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
                className="text-sky-500"
                wrapper="span"
                repeat={Infinity}
              />

              {/* Presentacion */}
              <p className="mb-8 mt-6 text-base mx-auto text-sky-900 dark:text-gray-200 lg-mx-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit eveniet vero nostrum, iste repudiandae nemo qui
                asperiores.
              </p>

              {/* Boton de contacto */}
              <div className="flex max-w-max gap-x-6 items-center mx-auto lg:mx-0 ">
                <Link
                  to="Contact"
                  smooth={true}
                  activeClass="active"
                  duration={600}
                  spy={true}
                  className="cursor-pointer"
                >
                  <button className="btn btn-lg mb-4">Contact me</button>
                </Link>
              </div>

              {/* RRSS */}
              <div className="flex gap-x-6 max-w-max mx-auto lg:mx-0 ">
                {rrss.map((rrss) => (
                  <a
                    href={rrss.url}
                    className="text-4xl my-4 text-sky-800 dark:text-gray-200 hover:text-sky-600 transition-all duration-300"
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
            <img
              src={foto}
              alt=""
              className="rounded-full mx-auto max-h-[500px] photo border-sky-600/15 border-8 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
