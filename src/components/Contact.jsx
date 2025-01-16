import React from "react";
import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "../constants";
import boxicons from "boxicons";

const textVariants = {
  hidden: { opacity: 0, y: 10 }, // Reducción del desplazamiento vertical
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Reducción de la duración
      ease: "easeOut",
      delay,
    },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 }, // Escala inicial más cercana al estado final
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4, // Reducción de la duración
      ease: "easeOut",
      delay,
    },
  }),
};

function Contact() {

  return (
    <section
      className="h-4/5 flex flex-col justify-center px-4 md:px-10"
      id="contact"
    >
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Contacto{" "}
      </h2>
      <div className="h-1 w-20 bg-white mb-8"> </div>
        <motion.h3
          className="text-6xl md:text-8xl leading-none"
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          variants={textVariants}
        >
          {CONTACT_CONTENT.headline}
        </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.p
              className="text-lg md:text-2xl mt-6 max-w-3xl"
              initial="hidden"
              whileInView="visible"
              custom={0.6}
              variants={textVariants}
            >
              {CONTACT_CONTENT.description}
            </motion.p>
            <motion.p
              className="text-lg md:text-2xl mt-6 max-w-3xl"
              initial="hidden"
              whileInView="visible"
              custom={0.6}
              variants={textVariants}
            >
              {CONTACT_CONTENT.personal}
            </motion.p>
            <motion.a
              href={`https://api.whatsapp.com/send?phone=5215612807356&text=Hola!%20Estoy%20interesado%20en%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20c%C3%B3mo%20podemos%20poner%20en%20marcha%20mi%20propio%20sitio%20web!`}
              className="text-2xl md:text-3xl font-medium mt-8 w-fit p-6 bg-stone-600/10 rounded-lg backdrop-blur-3xl bg-gradient-to-r from-green-900 to-stone-600/10 hover:outline outline-offset-2 outline-green-500"
              initial="hidden"
              whileInView="visible"
              custom={0.8}
              variants={textVariants}
            >
              <div className="flex gap-2">
                <box-icon
                  type="logo"
                  name="whatsapp"
                  size="md"
                  color="white"
                ></box-icon>
                <p>WhatsApp</p>
              </div>
            </motion.a>
            <motion.a
              href={`${CONTACT_CONTENT.sitio_web}`}
              className="text-2xl md:text-3xl font-medium mt-8 w-fit p-6 bg-stone-600/10 rounded-lg backdrop-blur-3xl bg-gradient-to-r from-rose-900 to-stone-600/10 hover:outline outline-offset-2 outline-rose-500"
              initial="hidden"
              whileInView="visible"
              target="_blank"
              custom={0.8}
              variants={textVariants}
            >
              <div className="flex gap-2">
                <box-icon name="link" color="white" size="md"></box-icon>
                <p>Portafolio Personal</p>
              </div>
            </motion.a>
      </div>
      <div className="flex space-x-6 mt-8">
        {CONTACT_CONTENT.socialLinks.map((link, index) => {
          return (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              initial="hidden"
              whileInView="visible"
              custom={1.0 + index * 0.2}
              variants={iconVariants}
            >
              <box-icon
                type="logo"
                name={link.icon}
                size="md"
                color="white"
              ></box-icon>
            </motion.a>
          );
        })}
      </div>
      <p className="text-sm text-stone-400 mt-36">
        <a
          href={`${CONTACT_CONTENT.sitio_web}`}
          target="_blank"
          className="transition ease-linear duration-300 hover:text-stone-500"
        >
          {CONTACT_CONTENT.footerText}
        </a>
      </p>
    </section>
  );
}

export default Contact;
