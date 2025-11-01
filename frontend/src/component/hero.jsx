import React, { useEffect } from "react";
import my_photo from "../assets/my_photo.png";
import design from "../assets/design.png";
import { FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Only animate once
    });
    AOS.refresh(); // Ensures animations are recalculated
  }, []);

  return (
    <div
      id="hero"
      className="w-full lg:px-[200px] px-8 lg:pb-[80px] pb-5 lg:pt-[50px] pt-[120px] h-full flex lg:flex-row flex-col justify-between items-center gap-[80px]"
    >
      <div className="lg:w-3/5 w-full flex flex-col justify-center items-start gap-8">
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-red-400  lg:text-3xl text-xl font-semibold font-poppins"
        >
          Hi,I am Ayush
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-white   text-6xl font-semibold font-poppins"
        >
           Web Developer,UI/UX Developer
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-gray-300 lg:text-x1 text-lg font-poppins"
        >
          I am full stack web developer with experience of 3 years, I have full
          skill and knowlegde in Frontend and Backend development, I proven
          myself with many eye capturing projects.
        </p>
        <a href="https://www.linkedin.com/in/ayush-kumar-88556128a/">
        <button
          className="bg-red-500  hover:bg-white text-white hover:text-red-500
            font-semibold text-lg px-8 py-3 flex  rounded-lg mt-5 font-poppins"
        >
          Contact me <span className="m-auto ml-2 "><FaLinkedin /></span>
        </button>
        </a>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="600"
        className="lg:w-2/5 w-full relative mb-20"
      >
        <div
          className="bg-[#2f2f2f] lg:w-[400px] w-full lg:h-[400px]
         h-[400px] rounded-lg absolute top-[30px] -left-[30px]"
        >
          <img
            src={my_photo}
            alt=""
            className="lg:w-[500px] w-full lg:h-[450px] h-[450px] rounded-lg relative z-20"
          />
          <img
            src={design}
            alt=""
            className="absolute -top-7 -right-7 rounded-1g z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
