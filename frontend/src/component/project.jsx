import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import project1 from "../assets/Ecommerce.png";
import project2 from "../assets/Ai_assistant.png";
import project3 from "../assets/weather app.png";
import project4 from "../assets/Dice-game.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <div
      id="projects"
      className="w-full lg:px-[200px] px-8 py-[60px] h-full flex
    flex-col justify-between items-center gap-5"
    >
      <h1
        data-aos="zoom-in"
        className="text-4x1 uppercase text-white font-poppins font-semibold"
      >
        Projects
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="bg-red-500 h-[3px] w-40"
      ></div>
      <p
        data-aos="zoom-in"
        data-sos-delay="400"
        className="text-gray-300 text-1g text-center font-poppins lg:w-[70%] w-full"
      >
        These projects prove my high skills in web development.
      </p>
      <div
        className="w-full flex lg:flex-row flex-col justify-between items-center gap-20
       mt-10 "
      >
        <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
          <h1 className="flex flex-col justify-center items-start gap-4"></h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-white font-semibold text-[32px] leading-10"
          >
            Ecommerce Mobile App Development{" "}
          </h1>
          <button
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="text-red-500 text-[17px] font-poppins flex justify-center items-center gap-2"
          >
            See Details
            <span>
              <FaArrowRight />
            </span>
          </button>
          <p className="text-white justify-center">
            Highly responsive website with eye capturing animation and hovering
            with the help of react-slick,slider,AOS libraries. It contains high
            display image of products with proper listing an animation{" "}
          </p>
          <a href="https://github.com/siayush735/My-Portfolio">
            <p className="text-green-400 hover:text-blue-400 hover:underline md:2px">
              Click for Github code
            </p>
          </a>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="1200"
          className="lg:w-[60%] w-full relative"
        >
          <div className="bg-gray-900 lg:w-[600px] w-[300px] lg:h-[270px] h-[200px] rounded-lg absolute top-[30px] -left-[30px]"></div>
          <img src={project1} alt="" className="relative z-20 rounded-lg" />
        </div>
      </div>
      <div
        className="w-full flex lg:flex-row-reverse flex-col justify-between items-center gap-20
       mt-20 "
      >
        <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
          <h1 className="flex flex-col justify-center items-start gap-4"></h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-white font-semibold text-[32px] leading-10"
          >
            AI Virtual Assistant{" "}
          </h1>
          <button
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="text-red-500  text-[17px] font-poppins flex justify-center items-center gap-2"
          >
            See Details
            <span>
              <FaArrowRight />
            </span>
          </button>
          <p className="text-white justify-center">
            Made a project that use window spech recognition and utterance to
            listen to tha client voice and transcript it into string format to
            display result according to it after telling him. Open it on chrome
          </p>
          <a href="https://github.com/siayush735/Virtual-AI-assistant.git">
            <p className="text-green-400 hover:text-blue-400 hover:underline md:2px">
              Click for Github code
            </p>
          </a>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="1200"
          className="lg:w-[70%] w-full relative"
        >
          <div className="bg-gray-900 lg:w-[600px] w-[300px] lg:h-[270px] h-[200px] rounded-lg absolute top-[30px] -left-[60px]"></div>
          <img src={project2} alt="" className="relative z-20 rounded-lg" />
        </div>
      </div>
      <div
        className="w-full flex lg:flex-row flex-col justify-between items-center gap-20
       mt-10 "
      >
        <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
          <h1 className="flex flex-col justify-center items-start gap-4"></h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-white font-semibold text-[32px] leading-10"
          >
            Real-Time weather app{" "}
          </h1>
          <button
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="text-red-500 text-[17px] font-poppins flex justify-center items-center gap-2"
          >
            See Details
            <span>
              <FaArrowRight />
            </span>
          </button>
          <p className="text-white justify-center">
            It is real time weather app made with the help of open weather API.
            It can provide weather data of all cities in the world on one click.{" "}
          </p>
          <a href="https://github.com/siayush735/weather-app.git">
            <p className="text-green-400 hover:text-blue-400 hover:underline md:2px">
              Click for Github code
            </p>
          </a>
        </div>
        <div className="lg:w-[60%] w-full relative">
          <div className="bg-gray-900 lg:w-[600px] w-[300px] lg:h-[370px] h-[200px] rounded-lg absolute top-[30px] -left-[30px]"></div>
          <img
            src={project3}
            data-aos="zoom-in"
            data-aos-delay="1200"
            alt=""
            className="relative z-20 rounded-lg"
          />
        </div>
      </div>
      <div
        className="w-full flex lg:flex-row-reverse flex-col justify-between items-center gap-20
       mt-20 "
      >
        <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
          <h1 className="flex flex-col justify-center items-start gap-4"></h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-white font-semibold text-[32px] leading-10"
          >
            Dice Game{" "}
          </h1>
          <button
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="text-red-500  text-[17px] font-poppins flex justify-center items-center gap-2"
          >
            See Details
            <span>
              <FaArrowRight />
            </span>
          </button>
          <p className="text-white justify-center">
            A dice game app with all dynamic features of dice like random dice
            rolling animation with backend mathematical function to generate
            random score
          </p>
          <a href="https://github.com/siayush735/Dice-Game-with-reacts-js.git">
            <p className="text-green-400 hover:text-blue-400 hover:underline md:2px">
              Click for Github code
            </p>
          </a>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="1200"
          className="lg:w-[70%] w-full relative"
        >
          <div className="bg-gray-900 lg:w-[500px] w-[300px] lg:h-[400px] h-[200px] rounded-lg absolute top-[30px] -left-[60px]"></div>
          <img src={project4} alt="" className="relative z-20 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Project;
