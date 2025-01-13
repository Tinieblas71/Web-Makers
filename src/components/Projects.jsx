import { motion } from "framer-motion";
import React from "react";
import { PROJECTS } from "../constants";
import { useState, useEffect } from "react";

const projectVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: 10, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      type: "spring",
      bounce: 0.4,
    },
  },
};

const useDeviceType = () => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const width = window.innerWidth;
    setDevice(width < 768 ? "mobile" : "desktop");
  }, []);

  return device;
};

function Projects() {
  const device = useDeviceType();

  return (
    <section className="px-6 py-10" id="work">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Proyectos
      </h1>
      <div className="h-1 w-20 mb-10 bg-white"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {device === "mobile" ? (
          <>
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-x-hidden h-[500px] transition transform"
              >
                <img
                  src={project.image}
                  alt="project img"
                  className="absolute inset-0 w-full h-full objet-cover transition-opacity duration-300"
                />
                <div className="relative z-20 p-6 flex flex-col justify-between h-full bg-black/30 text-white">
                  <h2 className="text-2xl font-medium mb-4 backdrop-blur-3xl p-3 bg-stone-600/10 rounded-lg">
                    {project.name}
                  </h2>
                  <div className="flex flex-col justify-between">
                    <p className="mb-4 flex-grow text-2xl backdrop-blur-3xl p-3 bg-stone-600/10 rounded-lg">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center"
                    >
                      Ver Proyecto
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg overflow-x-hidden h-[500px] transition transform"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={projectVariants}
              >
                <img
                  src={project.image}
                  alt="project img"
                  className="absolute inset-0 w-full h-full objet-cover transition-opacity duration-300"
                />
                <div className="relative z-20 p-6 flex flex-col justify-between h-full bg-black/30 text-white">
                  <h2 className="text-2xl font-medium mb-4 backdrop-blur-3xl p-3 bg-stone-600/10 rounded-lg">
                    {project.name}
                  </h2>
                  <div className="flex flex-col justify-between">
                    <p className="mb-4 flex-grow text-2xl backdrop-blur-3xl p-3 bg-stone-600/10 rounded-lg">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center"
                    >
                      Ver Proyecto
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default Projects;
