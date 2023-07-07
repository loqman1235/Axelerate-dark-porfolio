import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuVisible(!menuVisible);
  };

  console.log(menuVisible);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };

    if (menuVisible) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuVisible]);

  return (
    <div className="w-full px-5 md:px-20 mt-5 flex justify-between items-center mb-20 md:mb-[140px]">
      {/* Brand */}
      <a href="#" className="text-2xl font-bold text-white">
        <span className="text-[#B6EADA]">Axel</span>erate
      </a>
      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-10">
        <li>
          <a className="text-lg hover:text-[#B6EADA] transition" href="#">
            Home
          </a>
        </li>
        <li>
          <a
            className="text-lg hover:text-[#B6EADA] transition"
            href="#aboutme"
          >
            About
          </a>
        </li>
        <li>
          <a className="text-lg hover:text-[#B6EADA] transition" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a
            className="text-lg hover:text-[#B6EADA] transition"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="text-lg hover:text-[#B6EADA] transition"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
      {/* Mobile Nav */}
      <button
        className="md:hidden text-[#B6EADA]"
        onClick={(e) => toggleMenu(e)}
      >
        <FaBars size={24} />
      </button>
      {/* Mobile Menu */}
      <ul
        ref={menuRef}
        className={`${
          menuVisible ? "-translate-x-0" : "-translate-x-full"
        } w-72 h-full fixed top-0  left-0 bg-[#5B8FB9] z-50 p-5 transition-transform duration-700 md:-translate-x-full`}
      >
        <li>
          <a
            className="text-lg mb-6 block font-medium hover:text-[#B6EADA] transition"
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-lg mb-6 block font-medium hover:text-[#B6EADA] transition"
            href="#aboutme"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-lg mb-6 block font-medium hover:text-[#B6EADA] transition"
            href="#skills"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className="text-lg mb-6 block font-medium hover:text-[#B6EADA] transition"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="text-lg mb-6 block font-medium hover:text-[#B6EADA] transition"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
