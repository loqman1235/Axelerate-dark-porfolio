import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full px-5 md:px-20 mb-10 md:mb-[70px]">
      <h3 className="font-semibold text-2xl mb-4">Contact Me</h3>
      <div className="w-full flex flex-col md:flex-row items-start md:items-center md:justify-between">
        {/* Contact Form */}
        <form className="w-full md:w-1/2 mb-20 md:mb-0">
          <div className="flex flex-col gap-2 text-sm mb-4">
            <label htmlFor="name" className="text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="py-3 px-4 outline-none border-none bg-[#090537] rounded-lg text-lg placeholder:text-white/10 placeholder:font-light"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm mb-4">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="name"
              placeholder="Enter your email"
              className="py-3 px-4 outline-none border-none bg-[#090537] rounded-lg text-lg placeholder:text-white/10 placeholder:font-light"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm mb-4">
            <label htmlFor="msg" className="text-sm font-semibold">
              Message
            </label>
            <textarea
              name="msg"
              id="msg"
              rows="5"
              className="py-3 px-4 outline-none border-none bg-[#090537] rounded-lg text-lg placeholder:text-white/10 placeholder:font-light resize-none"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button className="py-2 px-6 bg-[#B6EADA] text-[#03001C] font-bold text-lg rounded-lg w-full md:w-auto">
            Message Me
          </button>
        </form>
        {/* Contact Info */}
        <div>
          <p className="text-sm md:text-lg flex items-center gap-5 text-[#5B8FB9] mb-5">
            <FaPhoneAlt size={20} className="text-[#B6EADA]" /> +1(255) 123-4567
          </p>
          <p className="text-sm md:text-lg flex items-center gap-5 text-[#5B8FB9] mb-5">
            <FaEnvelope size={20} className="text-[#B6EADA]" />{" "}
            tonyvito12@email.com
          </p>
          <p className="text-sm md:text-lg flex items-center gap-5 text-[#5B8FB9] mb-10 md:mb-5">
            <FaMapMarkerAlt size={20} className="text-[#B6EADA]" /> Ain Beida,
            Oum El Bouaghi, Algeria
          </p>
          {/* Social */}
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#B6EADA] text-[#03001C]"
              >
                <FaFacebookF size={20} />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#B6EADA] text-[#03001C]"
              >
                <FaGithub size={20} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#B6EADA] text-[#03001C]"
              >
                <FaInstagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
