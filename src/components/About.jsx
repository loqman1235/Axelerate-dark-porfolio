import React from "react";
import ProfilePic from "../assets/profile_pic.jpg";
import Shape from "../assets/Vector.svg";

const About = () => {
  return (
    <div
      id="aboutme"
      className="px-5 md:px-20 w-full flex flex-col md:flex-row md:justify-between justify-center items-center relative mb-[140px] md:gap-10"
    >
      <div className="w-2/3">
        <h3 className="font-semibold text-2xl mb-4 text-center md:text-left">
          About Me
        </h3>
        <p className="text-[#5B8FB9] leading-[26px] text-center md:text-left mb-10 md:mb-0 ">
          Greetings! I'm Axel, a passionate full stack developer dedicated to
          creating engaging and innovative web experiences. With a deep
          understanding of both front-end and back-end development, I strive to
          craft robust and user-friendly applications that make a positive
          impact. <br />
          <br />
          My journey in the world of programming began with a curiosity for how
          websites come to life. Over the years, this curiosity has evolved into
          a burning passion that drives me to constantly enhance my skills and
          stay up to date with the latest technologies.
        </p>
      </div>
      {/* Photo */}
      <div className="w-[222px] h-[222px] rounded-2xl bg-slate-400 overflow-hidden">
        <img src={ProfilePic} alt="" className="w-full h-full object-cover" />
      </div>
      <img
        className="hidden md:hidden lg-block sm:hidden absolute right-[20%] bottom-[-17%] z-[-1]"
        src={Shape}
        alt=""
      />
      <img
        className="hidden md:hidden lg-block sm:hidden absolute right-[4%] top-[-10%] z-[-1]"
        src={Shape}
        alt=""
      />
    </div>
  );
};

export default About;
