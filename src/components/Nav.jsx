import * as React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const sections = [
    {
      name: "Home",
      icon: "fa-solid fa-house",
      url: "Home",
    },
    {
      name: "About",
      icon: "fa-solid fa-user",
      url: "About",
    },
    {
      name: "Skills",
      icon: "fa-solid fa-gears",
      url: "Skills",
    },
    {
      name: "Services",
      icon: "fa-solid fa-laptop-code",
      url: "Services",
    },
    {
      name: "Portfolio",
      icon: "fa-solid fa-briefcase",
      url: "Portfolio",
    },
    {
      name: "Contact",
      icon: "fa-solid fa-paper-plane",
      url: "Contact",
    },
  ];
  return (
    <nav className="fixed bottom-4 w-full overflow-hidden z-50  ">
      <div className="container mx-auto px-2 md:px-0 my-auto ">
        <div className="bg-sky-600/30   :bg-sky-600/50 w-[95%] md:w-full h-20  scroll-smooth backdrop-blur-2xl rounded-full max-w-[400px]  mx-auto px-5 flex items-center justify-between  text-2xl text-gray-200/80 dark:text-gray-200">
          {sections.map((section, index) => (
            <Link
              to={section.name}
              smooth={true}
              activeClass="active"
              duration={600}
              spy={true}
              offset={index === 0 ? -200 : 0}
              className="cursor-pointer w-[50px] md:w-[60px] lg:my-3 h-[50px] md:h-[60px] flex items-center justify-center"
            >
              <i className={section.icon}></i>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
