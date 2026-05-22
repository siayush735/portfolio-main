import React, { useEffect } from "react";
import my_photo from "../assets/Ayush.jpg";
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
  className="w-full lg:px-[120px] px-5 py-[60px] flex lg:flex-row flex-col-reverse justify-between items-center gap-16 overflow-hidden"
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
  className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
>
  Full Stack Web Developer / Software Developer
</h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-gray-300 lg:text-x1 text-lg font-poppins"
        >
          I am full stack web developer with experience of 2 years, I have full
          skill and knowlegde in Frontend and Backend development, I proven
          my skills with many real time projects and problem solving skill. 
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
  data-aos="zoom-in"
  data-aos-delay="600"
  className="lg:w-[40%] w-full flex justify-center relative"
>
  <div className="bg-[#2f2f2f] w-[280px] sm:w-[350px] lg:w-[400px] h-[300px] sm:h-[380px] lg:h-[400px] rounded-lg absolute top-5 left-2 sm:left-5"></div>

  <img
    src={my_photo}
    alt=""
    className="w-[280px] sm:w-[350px] lg:w-[400px] h-[320px] sm:h-[400px] lg:h-[450px] object-cover rounded-lg relative z-20"
  />

  <img
    src={design}
    alt=""
    className="absolute -top-6 right-0 z-10 w-20 sm:w-28"
  />
</div>
      </div>
    </div>
  );
}

export default Hero;
