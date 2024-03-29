import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center text-center mb-[140px] px-10">
      <h1 className="text-4xl md:text-6xl font-black w-full md:w-[80%] leading-[49.77px] md:leading-[68px] mb-5 tracking-tight">
        Transforming Ideas into <span className="text-[#301E67]">Powerful</span>{" "}
        Digital Experiences
      </h1>
      <p className="w-full md:w-[80%] text-[18px] text-[#5B8FB9] leading-[25px] mb-10">
        Welcome to my innovative world of full stack development. I'm passionate
        about leveraging cutting-edge technologies to create immersive and
        impactful digital experiences. With a focus on user-centric design and
        robust functionality, I craft bespoke solutions that drive results. Join
        me on this journey as we bring your vision to life in the digital realm
      </p>
      <div className="flex items-center gap-5">
        <a
          href="#contact"
          className="whitespace-nowrap py-2 px-6 bg-[#B6EADA] text-[#03001C] font-bold text-lg rounded-lg"
        >
          Contact Me
        </a>
        <a
          href="#projects"
          className="whitespace-nowrap py-2 px-6  text-[#B6EADA] font-bold text-lg hover:underline "
        >
          My Projects
        </a>
      </div>
    </div>
  );
};

export default Hero;
