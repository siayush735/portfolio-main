import React, { useEffect } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";

import project1 from "../assets/Ecommerce.png";
import project2 from "../assets/Ai_assistant.png";
import project3 from "../assets/bookmark.png";
import project4 from "../assets/Dice-game.png";
import project5 from "../assets/emplm.png";

import AOS from "aos";
import "aos/dist/aos.css";

function Project() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const projects = [
    {
      title: "Employee Management System",
      image: project5,
      github:
        "https://github.com/siayush735/siayush735-mern-Employee-management-App",
      description:
        "Employee management application with CRUD operations, pagination and MongoDB database integration.",
    },

    {
      title: "Ecommerce Mobile App",
      image: project1,
      github: "https://github.com/siayush735/My-Portfolio",
      description:
        "Modern ecommerce UI with responsive layouts, sliders, animations and smooth shopping experience.",
    },

    {
      title: "AI Virtual Assistant",
      image: project2,
      github: "https://github.com/siayush735/Virtual-AI-assistant.git",
      description:
        "Voice assistant using Speech Recognition and Speech Synthesis APIs to process user commands dynamically.",
    },

    {
      title: "Smart Bookmark App",
      image: project3,
      github: "https://github.com/siayush735/smart-bookmarks-app",
      description:
        "Bookmark storage platform with authentication, URL management and Supabase backend integration.",
    },

    {
      title: "Dice Game",
      image: project4,
      github: "https://github.com/siayush735/Dice-Game-with-reacts-js.git",
      description:
        "Interactive dice game featuring random animations and dynamic score generation using JavaScript.",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-black py-20 px-5 md:px-10 lg:px-24 overflow-hidden"
    >

      {/* Heading */}
      <div className="text-center mb-20">

        <h1
          data-aos="zoom-in"
          className="text-white py-2 text-4xl md:text-5xl font-bold uppercase tracking-wide"
        >
          Projects
        </h1>

        <div
          data-aos="zoom-in"
          className="w-28 h-1 bg-red-500 mx-auto mt-5 rounded-full"
        ></div>

        <p
          data-aos="zoom-in"
          className="text-gray-400 text-base md:text-lg mt-6 pb-2 max-w-3xl mx-auto leading-8"
        >
          These projects showcase my frontend, backend and full stack
          development skills with responsive and modern UI design.
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-24">

        {projects.map((project, index) => (

          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-12 items-center p-3 ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >

            {/* Image Section */}
            <div
              data-aos="zoom-in"
              className="relative group"
            >

              {/* Background Effect */}
              <div className="absolute inset-0 bg-red-500/10 rounded-3xl blur-2xl group-hover:bg-red-500/20 transition-all duration-500"></div>

              {/* Card */}
              <div className="relative bg-[#161616] rounded-3xl p-4 border border-gray-800 shadow-2xl">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div
              data-aos="fade-up"
              className="flex flex-col gap-6"
            >

              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                {project.title}
              </h2>

              <button className="text-red-500 flex items-center gap-3 text-lg hover:gap-5 transition-all duration-300 w-fit">

                See Details

                <FaArrowRight />
              </button>

              <p className="text-gray-400 text-base md:text-lg leading-8">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-green-400 hover:text-blue-400 transition-all duration-300 text-lg w-fit"
              >

                <FaGithub />

                Github Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;