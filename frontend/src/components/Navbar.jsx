import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Doctors", path: "/doctors" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 relative">
      {/* Logo */}
      <img
        className="w-44 cursor-pointer"
        src={assets.admin_logo}
        alt="Logo"
        onClick={() => navigate("/")}
      />

      {/* Navigation */}
      <ul className="hidden md:flex items-center gap-6 font-medium">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#5F6FFF] font-bold border-b-2 border-[#5F6FFF] pb-1"
                  : "text-black hover:text-[#5F6FFF] transition-colors"
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
              className="w-8 rounded-full"
            />
            <img src={assets.down_arrow} alt="Arrow" className="w-2.5" />

            {/* Dropdown */}
            <div className="absolute right-0 mt-30 hidden group-hover:block min-w-48 bg-stone-100 rounded shadow-lg p-4 flex flex-col gap-2 text-gray-700">
              <p
                onClick={() => navigate("/my-profile")}
                className="hover:text-black cursor-pointer"
              >
                My Profile
              </p>
              <p
                onClick={() => navigate("/my-appointments")}
                className="hover:text-black cursor-pointer"
              >
                My Appointments
              </p>
              <p
                onClick={() => {
                  setToken(false);
                  navigate("/login");
                }}
                className="hover:text-red-500 cursor-pointer"
              >
                Logout
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[#5F6FFF] cursor-pointer text-white px-4 py-2 rounded-lg font-light hidden md:block hover:bg-[#4a5cd3] transition-colors"
          >
            Create account
          </button>
        )}
      </div>
    </div>
	);
};

export default Navbar;
