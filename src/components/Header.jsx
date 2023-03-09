import React from "react";

const Header = () => {
  return (
    <header className="py-8 px-3 md:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <a href="#">
            <span className="text-3xl font-semibold text-light-blue dark:text-white">
              Nicolas
            </span>
          </a>
          <button className="btn btn-sm ">Trabajemos juntos</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
