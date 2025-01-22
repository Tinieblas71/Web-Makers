import { motion } from "framer-motion";
import logo from "../assets/web-maker-logo.png";
import { useState, useEffect } from "react";
import React from "react";
import { HERO_CONTENT } from "../constants";
import boxicons from "boxicons";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Reducimos el tiempo entre hijos para acelerar el proceso
    },
  },
};

const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%)" },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: {
      duration: 0.8, // Reducción de la duración para optimizar el rendimiento
      ease: "easeOut", // Cambiar a 'easeOut' para una animación más rápida y eficiente
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

function Hero() {
  const device = useDeviceType();

  return (
    <section>
      <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
        {device === "mobile" ? (
          <>
            <div className="w-full md:w-1/2 p-8">
              <h1 className="text-2xl md:text-3xl lg:text-6xl my-14">
                <b>{HERO_CONTENT.greeting}</b>
              </h1>
              <p className="text-6xl md:text-2xl lg:text-4xl mb-4 text-white font-semibold 
              bg-gradient-to-r from-white via-slate-500 to-slate-600 text-transparent bg-clip-text">
                Tu <span className="text-7xl md:text-2xl lg:text-4xl bg-gradient-to-b from-white via-cyan-400 to-blue-400 text-transparent bg-clip-text font-semibold">negocio</span> al <span className="text-7xl md:text-2xl lg:text-4xl bg-gradient-to-b from-white via-pink-400 to-rose-400 text-transparent bg-clip-text font-semibold">siguiente</span> nivel.
              </p>
              <p className="text-xl md:text-2xl lg:text-4xl mt-8 mb-4 backdrop-blur-3xl p-8 bg-stone-600/10 rounded-lg">
                {HERO_CONTENT.description}
              </p>
            </div>
            <div className="w-full mb-12">
              <div className="bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                  <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                    <motion.div
                      animate={{
                        y: [0, 24, 0],
                      }}
                      transition={{
                        duration: 1.25,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                      className="w-3 h-3 rounded-full bg-secondary mb-1 bg-white"
                    />
                  </div>
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <motion.div
              className="w-full md:w-1/2 p-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              style={{ willChange: "transform" }}
            >
              <motion.h1
                className="text-2xl md:text-3xl lg:text-5xl my-14"
                variants={textVariants}
              >
                <b>{HERO_CONTENT.greeting}</b>
              </motion.h1>
                <motion.p className="text-6xl md:text-2xl lg:text-4xl mb-4 text-white font-semibold 
                bg-gradient-to-r from-white via-slate-500 to-slate-600 text-transparent bg-clip-text"
                variants={textVariants}>
                  Tu <span className="text-7xl md:text-2xl lg:text-4xl bg-gradient-to-b from-white via-cyan-400 to-blue-400 text-transparent bg-clip-text font-semibold">negocio</span> al <span className="text-7xl md:text-2xl lg:text-4xl bg-gradient-to-b from-white via-pink-400 to-rose-400 text-transparent bg-clip-text font-semibold">siguiente</span> nivel.
                </motion.p>
              <motion.p
                className="text-xl md:text-2xl lg:text-4xl mb-4"
                variants={textVariants}
              >
                {HERO_CONTENT.description}
              </motion.p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 p-8"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              style={{ willChange: "transform" }}
            >
              <img
                src={logo}
                alt="img jason"
                width={420}
                height={420}
                className="rounded-3xl"
              />
            </motion.div>
            <div className="w-full">
              <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
                <a href="#work">
                  <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                    <motion.div
                      animate={{
                        y: [0, 24, 0],
                      }}
                      transition={{
                        duration: 1.25,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                      className="w-3 h-3 rounded-full bg-secondary mb-1 bg-white"
                    />
                  </div>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Hero;
