import { motion } from "framer-motion";
import React from "react";
import { ABOUT_CONTENT } from "../constants";
import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const width = window.innerWidth;
    setDevice(width < 768 ? "mobile" : "desktop");
  }, []);

  return device;
};

function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const device = useDeviceType();

  return (
    <section className="px-6 py-10" id="about">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Acerca De
      </h1>
      <div className="h-1 w-20 mb-8 bg-white "></div>
      <div className="max-w-4xl mx-auto backdrop-blur-3xl p-8 bg-stone-600/10 rounded-lg">
        {device === "mobile" ? (
          <>
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-xl md:text-2xl lg:text-4xl mb-10 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </>
        ) : (
          <>
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-xl md:text-2xl lg:text-4xl mb-10 leading-relaxed"
                initial="hidden"
                whileInView="visible"
                viewPort={{ once: true, amount: 0.5 }}
                variants={textVariants}
              >
                {paragraph}
              </motion.p>
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default About;
