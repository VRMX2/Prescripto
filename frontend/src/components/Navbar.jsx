// src/components/Navbar.jsx
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Doctors", path: "/doctors" },
    { name: "Specialities", path: "/#speciality" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-gray-800 shadow-md">
      <div className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-20 text-white">
        {/* Logo */}
        <img
          className="w-40 cursor-pointer hover:scale-105 transition-transform"
          src={assets.admin_logo}
          alt="Logo"
          onClick={() => navigate("/")}
        />

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `pb-1 transition-all duration-300 ${
                    isActive
                      ? "text-white font-semibold border-b-2 border-blue-400"
                      : "text-gray-400 hover:text-blue-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {token ? (
            <div className="relative group flex items-center gap-2 cursor-pointer">
              <img
                src={assets.profile_pic}
                alt="Profile"
                className="w-9 rounded-full grayscale border border-gray-600"
              />
              <img src={assets.down_arrow} alt="Arrow" className="w-3 invert" />

              {/* Dropdown */}
              <div className="absolute right-0 top-full mt-2 hidden group-hover:flex flex-col bg-white/95 rounded-xl shadow-lg p-4 gap-3 text-black w-52">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => {
                    setToken(false);
                    navigate("/login");
                  }}
                  className="hover:text-red-600 cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2 rounded-lg font-medium hover:scale-105 transition-transform shadow-md"
            >
              Create Account
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
