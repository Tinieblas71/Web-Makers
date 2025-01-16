import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "../constants";
import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const width = window.innerWidth;
    setDevice(width < 768 ? "mobile" : "desktop");
  }, []);

  return device;
};

function Testimonials() {
  const childVariants = {
    hidden: { opacity: 0, y: 20 }, // Reducimos el desplazamiento vertical
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Reducción de la duración
        delay: i * 0.3, // Reducimos el tiempo de retraso para evitar ralentizar la animación general
        ease: "easeOut", // Suavidad sin sobrecargar
      },
    }),
  };

  const device = useDeviceType();

  return (
    <section className="px-6 py-10 h-4/5" id="testimonials">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Testimonios
      </h1>
      <div className="h-1 w-20 bg-white mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {device === "mobile" ? (
          <>
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10"
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={childVariants}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt="testimonials imgs"
                    className="w-12 rounded-full mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">
                      {testimonial.name}
                    </h2>
                    <p className="text-sm font-light">{testimonial.title}</p>
                  </div>
                </div>
                <p className="leading-relaxed">{testimonial.feedback}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10"
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={childVariants}
                style={{ willChange: 'transform' }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt="testimonials imgs"
                    className="w-12 rounded-full mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">
                      {testimonial.name}
                    </h2>
                    <p className="text-sm font-light">{testimonial.title}</p>
                  </div>
                </div>
                <p className="leading-relaxed">{testimonial.feedback}</p>
              </motion.div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
