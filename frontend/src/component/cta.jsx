import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function cta() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="200"
      className="w-full lg:px-[100px] px-8 py-[60px] h-full flex
    flex-col justify-between items-center gap-5 mt-[170px]"
    >
      <h1 className="text-10x1 uppercase text-white font-poppins font-semibold">
        Skills
      </h1>
      <div className="w-72 h-1 bg-red-500 mb-5"></div>
      <ul className="flex flex-row gap-10 text-white">
        <li data-aos="zoom-in" data-aos-delay="200">
          HTML/CSS
        </li>
        <li data-aos="zoom-in" data-aos-delay="300">
          Javascript
        </li>
        <li data-aos="zoom-in" data-aos-delay="400">
          Typescript
        </li>
        <li data-aos="zoom-in" data-aos-delay="400">
          Node js
        </li>
        <li data-aos="zoom-in" data-aos-delay="500">
          React Js
        </li>
        <li data-aos="zoom-in" data-aos-delay="600">
          Next js
        </li>
        <li data-aos="zoom-in" data-aos-delay="700">
          Database
        </li>
        <li data-aos="zoom-in" data-aos-delay="800">
          API
        </li>
        <li data-aos="zoom-in" data-aos-delay="900">
          Java
        </li>
      </ul>
      <ul className="text-white">
        <li data-aos="zoom-in" data-aos-delay="1000">Software Development</li>
      </ul>
    </div>
  );
}

export default cta;
