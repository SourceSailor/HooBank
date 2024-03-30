import React from "react";
import { navLinks } from "../constants/index";
import { useState } from "react";
import { close, logo, menu } from "../assests";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img className="w-[124px] h-[32px]" src={logo} alt="Logo" />

      {/* DESKTOP NAVIGATION MENU */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, idx) => (
          <li
            className={`font-poppins font-normal text-[16px] text-white ${
              idx === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            key={idx}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      {/* MOBILE NAVIGATION MENU */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {openNavbar ? (
          <img
            src={close}
            alt="Close Menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setOpenNavbar(false)}
          />
        ) : null}

        {openNavbar ? (
          <div
            className={`${
              openNavbar ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-center flex-1 flex-col">
              {navLinks.map((link, idx) => (
                <li
                  className={`font-poppins font-normal text-[16px] text-white ${
                    idx === navLinks.length - 1 ? "mr-0" : "mb-5"
                  }`}
                  key={idx}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <img
            className="cursor-pointer"
            src={menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setOpenNavbar((prev) => !prev)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
