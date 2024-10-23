import { useState } from "react";
import { Link } from "react-router-dom";
import DeeepNetLogo from "../images/deepnetsoft_logo-removebg-preview (1).png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [activeLinks, setActiveLinks] = useState("MENU");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  const navLinks = [
    { path: "/", element: "HOME" },
    { path: "/", element: "MENU" },
    { path: "/", element: "MAKE A RESERVATION" },
    { path: "/", element: "CONTACT US" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative p-4 bg-black w-full">
      <nav className="flex justify-between items-center">
        <div className="relative flex items-center">
          <img
            src={DeeepNetLogo}
            alt="Deep Net Soft Logo"
            className="w-24 h-24 absolute bottom-[-60px] left-0 z-10"
          />
          <span className="text-blue-600 text-2xl font-bold relative z-10 ml-24 bottom-[-50px]">
            DEEP{" "}
            <span className="text-white text-2xl font-bold relative z-10 ml-2">
              NET
            </span>
            <span className="block text-slate-300 text-2xl font-bold relative z-10 bottom-[10px]">
              SOFT
            </span>
          </span>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-8 mr-10 font-sans text-base">
          {navLinks.map((item) => (
            <li key={item.element}>
              <Link
                onClick={() => setActiveLinks(item.element)}
                to={item.path}
                className={`hover:text-blue-500 transition duration-300 ${
                  activeLinks === item.element
                    ? "text-blue-500"
                    : "text-slate-200"
                }`}
              >
                {item.element}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-10 bg-black p-4">
          {navLinks.map((item) => (
            <Link
              key={item.element}
              onClick={() => {
                setActiveLinks(item.element);
                toggleMenu();
              }}
              to={item.path}
              className={`text-slate-200 hover:text-blue-500 transition duration-300 ${
                activeLinks === item.element ? "text-blue-500" : ""
              }`}
            >
              {item.element}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
