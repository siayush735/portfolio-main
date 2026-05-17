import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { DiJsBadge } from "react-icons/di";
import AOS from "aos";
import "aos/dist/aos.css";

function services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <div
      id="services"
      className="w-full lg:px-[200px] px-8 lg:py-[100px] py-[40px]
    h-full flex lg:flex-col mt-10 flex-col justify-center items-center gap-10 "
    >
      <div className=" w-full flex flex-col justify-center items-center gap-4">
        <h1
          data-aos="zoom-in"
          className="text-4x1 uppercase text-white font-poppins font-semibold"
        >
          Intership and certificate
        </h1>
        <div data-aos="zoom-in" className="bg-red-500 h-[3px] w-72"></div>
      </div>
      <div
        className=" w-full grid lg:grid-cols-2 grid-cols-1 justify-center
      items-center lg:gap-20 mt-10  "
      >
        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center items-center gap-6"
        >
          <div className="bg-rose-500 rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110">
            <MdOutlineDesignServices className="fill-white size-9" />
          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <h1 className="text-white font-semibold text-[20px]">
              Software Development and Engineering (code inbound llp - 6 month)
            </h1>
            <p className="text-gray-300 text-[17px] font-poppins">
              {" "}
              Developed scalable web modules using React.js and Node.js,
              improving UI performance by approximately 25%, Performed
              debugging, testing, and performance optimization in Microsoft
              Azure, Refactored codebase to improve maintainability and overall
              system efficiency.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center items-center gap-6"
        >
          <div className="bg-rose-500 rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110">
            <MdOutlineDesignServices className="fill-white size-9" />
          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <h1 className="text-white font-semibold text-[20px]">
              Full stack web development
            </h1>
            <p className="text-gray-300 text-[17px] font-poppins">
              fully trained on mern full stack development through online 9
              monthinternship program on Skill Academy tesbook. Done many
              projects based frontend and backend deveopment through react
              js,node js with database mongodb.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center items-center gap-6"
        >
          <div className="bg-rose-500 rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110">
            <MdOutlineDesignServices className="fill-white size-9" />
          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <h1 className="text-white font-semibold text-[20px]">Java</h1>
            <p className="text-gray-300 text-[17px] font-poppins">
              Certified by skill intership, All knowledge of java programming
              language basically on oops concept, ALso done large number of
              programming question on codechef through java.
            </p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center items-center gap-6"
        >
          <div className="bg-rose-500 rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110">
            <MdOutlineDesignServices className="fill-white size-9" />
          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <h1 className="text-white font-semibold text-[20px]">
              Data Analytics
            </h1>
            <p className="text-gray-300 text-[17px] font-poppins">
              Google certified data analyst with full skill of excel,sql,big
              query, Tableu. knowledge Data cleaning,data manipulation,
              normalization, data presentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;
