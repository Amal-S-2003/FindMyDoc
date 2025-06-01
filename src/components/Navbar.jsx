import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const { isUserLoggedin, userRole } = useContext(UserContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const userMenuItems = [
    { label: "Home", path: "/" },
    { label: "Find Doc", path: "/finddoc" },
    { label: "Notifications", path: "/notifications/1" },
  ];

  const doctorMenuItems = [
    { label: "Home", path: "/doctor" },
    { label: "Notifications", path: "/doctor/notifications/1" },
    { label: "Add Blog", path: "/doctor/add-blog" },
    { label: "History", path: "/doctor/history" },
  ];

  const menuItems = userRole === "doctor" ? doctorMenuItems : userMenuItems;

  const handleLoginClick = () => {
    setShowLoginOptions(!showLoginOptions);
    setMenuOpen(false);
  };

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
        className={`absolute md:static left-0 top-16 w-full md:w-auto md:flex md:gap-x-5 bg-white md:bg-transparent shadow-md md:shadow-none text-center px-5 py-3 md:p-0 transition-transform duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {menuItems.map((item) => (
          <li
            key={item.label}
            className="font-medium hover:text-white hover:bg-red-600 px-3 py-1 rounded-full cursor-pointer"
            onClick={() => {
              navigate(item.path);
              setMenuOpen(false);
            }}
          >
            {item.label}
          </li>
        ))}

        {isUserLoggedin ? (
          <li
            className="font-medium hover:text-white hover:bg-red-600 px-3 py-1 rounded-full cursor-pointer"
            onClick={() => {
              navigate(userRole === "doctor" ? "/doctor/profile" : "/profile");
              setMenuOpen(false);
            }}
          >
            Profile
          </li>
        ) : (
          <div className="relative">
            <div
              className="text-red-600 border-2 border-red-600 px-5 py-0.5 rounded-full hover:scale-110 hover:text-white hover:bg-red-600 font-medium cursor-pointer "
              onClick={handleLoginClick}
            >
              Login
            </div>
            {showLoginOptions && (
              <div className="absolute top-10 right-0 bg-white shadow-md rounded-md p-4 z-10">
                <button
                  className="block w-full text-left py-2 px-4 hover:bg-gray-100"
                  onClick={() => {
                    navigate("/login");
                    setShowLoginOptions(false);
                  }}
                >
                  User Login
                </button>
                <button
                  className="block w-full text-left py-2 px-4 hover:bg-gray-100"
                  onClick={() => {
                    navigate("/docter/login");
                    setShowLoginOptions(false);
                  }}
                >
                  Doctor Login
                </button>
              </div>
            )}
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;