import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const { isUserLoggedin } = useContext(UserContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-5 py-3 bg-white md:px-10">
      {/* Logo */}
      <div className="flex items-center text-2xl font-bold font-mono">
        <h1>
          <span className="text-red-600 text-4xl">F</span>ind
        </h1>
        <h1>
          <span className="text-red-600 text-4xl">M</span>y
        </h1>
        <h1>
          <span className="text-red-600 text-4xl">D</span>oc
        </h1>
      </div>

      {/* Menu button for mobile */}
      <button
        className="md:hidden text-red-600 font-bold text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navigation links */}
      <ul
        className={`absolute md:static left-0 top-16 w-full md:w-auto md:flex md:gap-x-5 bg-white md:bg-transparent shadow-md md:shadow-none text-center px-5 py-3 md:p-0 transition-transform duration-300 ${menuOpen ? "block" : "hidden"}`}
      >
        <li
          className="font-medium hover:text-white hover:bg-red-600 px-3 py-1 rounded-full cursor-pointer"
          onClick={() => { navigate("/"); setMenuOpen(false); }}
        >
          Home
        </li>
        <li
          className="font-medium hover:text-white hover:bg-red-600 px-3 py-1 rounded-full cursor-pointer"
          onClick={() => { navigate("/finddoc"); setMenuOpen(false); }}
        >
          Find Doc
        </li>
        <li
          className="font-medium hover:text-white hover:bg-red-600 px-3 py-1 rounded-full cursor-pointer"
          onClick={() => { navigate("/contact"); setMenuOpen(false); }}
        >
          Contact Us
        </li>
        {isUserLoggedin ? (
          <li
            className="font-medium hover:text-white hover:bg-red-600 px-3 py-1 rounded-full cursor-pointer"
            onClick={() => { navigate("/profile"); setMenuOpen(false); }}
          >
            Profile
          </li>
        ) : (
          <div
            className="text-red-600 border-2 border-red-600 px-5 py-0.5 rounded-full hover:scale-110 hover:text-white hover:bg-red-600 font-medium cursor-pointer "
            onClick={() => { navigate("/login"); setMenuOpen(false); }}
          >
            Login
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;