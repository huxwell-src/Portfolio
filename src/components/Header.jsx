import React from "react";

const Header = () => {
  return (
    <header className="py-8 px-3 md:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <a href="#Home">
            <span className="text-3xl font-semibold text-sky-500 dark:text-gray-200">
              Nicolas
            </span>
          </a>
          <a href="https://drive.google.com/file/d/1riIgWk7QfUOJOyQsJ2KI59lOp_ctovmB/view?usp=share_link">
            <button className="btn btn-sm ">Download CV</button>
            <i class="fa-solid fa-download"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
