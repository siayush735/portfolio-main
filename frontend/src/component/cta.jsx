import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Cta() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const skills = [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "React JS",
    "Next JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "SQL",
    "REST API",
    "Java",
    "Spring Boot",
    "Git/Github",
    "Software Development",
  ];

  return (
    <section
      id="skills"
      className="w-full bg-black py-20 px-5 md:px-10 lg:px-24 overflow-hidden"
    >

      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-5">

        <h1
          data-aos="zoom-in"
          className="text-white text-4xl md:text-5xl font-bold uppercase tracking-wide text-center"
        >
          Skills
        </h1>

        <div
          data-aos="zoom-in"
          className="w-28 h-1 bg-red-500 rounded-full"
        ></div>

        <p
          data-aos="zoom-in"
          className="text-gray-400 text-center text-base md:text-lg max-w-2xl leading-8"
        >
          Technologies and tools I use to build scalable,
          responsive and modern web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-16">

        {skills.map((skill, index) => (

          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className=" border border-gray-900 rounded-2xl py-5 px-4 flex justify-center items-center text-center hover:border-red-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
          >

            <h1 className="text-white text-sm sm:text-base md:text-lg font-semibold">
              {skill}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cta;