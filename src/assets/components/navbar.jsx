import logo from "../images/scomaLogo.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";
import K from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full overflow-hidden">
      <div className="flex justify-between items-center px-4 py-3">
        <span className="w-16 h-4 flex-shrink-0 mb-5">
          <img src={logo} alt="logo" />
        </span>
        <div className="hidden md:flex gap-x-5">
          {K.NAVLINKS.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className=""
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#24bdbb] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-5 py-3 bg-white max-w-sm mx-auto shadow-lg rounded-md">
          {K.NAVLINKS.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="border border-[#ffce02] w-full text-left px-3 py-2 rounded transition duration-200 hover:bg-[#ffce02] hover:text-[#0144f7] mb-1"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
