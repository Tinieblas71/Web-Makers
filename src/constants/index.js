import projects1 from "../assets/1.jpg";
import projects2 from "../assets/2.jpg";
import projects3 from "../assets/3.jpg";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";


export const LINKS = [
  { href: "#about", label: "Acerca De" },
  { href: "#work", label: "Proyectos" },
  /*{ href: "#experience", label: "Experiencias" },*/
  { href: "#testimonials", label: "Testimonios" },
  { href: "#contact", label: "Contacto" },
];

export const HERO_CONTENT = {
  greeting: "¡Bienvenidos!",
  introduction:
    "Web Makers, nació con un propósito claro.",
  description:
    "Ayudar a negocios locales a crecer y adaptarse al mundo moderno mediante soluciones digitales accesibles y efectivas.",
};

export const PROJECTS = [
  {
    name: "Portafolio",
    description: "Web personal de una agente inmobiliaria",
    image: projects1,
    link: "https://tinieblas71.github.io/Carmen-Ortiz-/",
  },
  {
    name: "Web de Vima Donut Station",
    description: "Tienda de donas, snacks y bebidas",
    image: projects2,
    link: "https://tinieblas71.github.io/VimaDonutStation/",
  },
  {
    name: "Apple iPhone 15 Pro",
    description: "Copia exacta de la página oficial del iPhone 15 Pro",
    image: projects3,
    link: "https://iphone-doc.vercel.app/",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "Diseño sitios web modernos, funcionales y hechos a la medida, combinando diseño atractivo, tecnología eficiente y una experiencia de usuario excepcional.",
    "Con experiencia en desarrollo web, aplicaciones y diseño, transformo tus ideas en soluciones digitales. Desde páginas para negocios hasta portafolios o plataformas personalizadas, estoy aquí para hacerlo realidad.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2023 — Now",
    title: "Senior Frontend Engineer at TechCorp",
    location: "Paris, France",
    description: [
      "Leading the development of scalable frontend architecture for enterprise-level applications.",
      "Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.",
      "Driving innovation through continuous improvements in performance and UI/UX design.",
    ],
  },
  {
    yearRange: "2021 — 2023",
    title: "Frontend Engineer at Startup Inc.",
    location: "Remote",
    description: [
      "Built dynamic, responsive, and accessible web applications using React, Next.js, and Tailwind CSS.",
      "Spearheaded frontend optimization efforts, resulting in a 40% performance boost.",
      "Mentored junior developers and led internal frontend workshops.",
    ],
  },
  {
    yearRange: "2018 — 2021",
    title: "Frontend Developer at Creative Solutions",
    location: "London, UK",
    description: [
      "Developed and maintained user interfaces for high-traffic websites.",
      "Worked closely with designers to implement pixel-perfect designs.",
      "Optimized websites for SEO and performance, resulting in a 30% increase in traffic.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Carmen Ortiz",
    title: "Agente Inmboliaria",
    feedback:
      "Pensé que era imposible hacer un sitio web tan bonito como nuestro producto, pero Santi me demostró que estaba equivocada.",
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: "Franciso Montes",
    title: "Gerente, Vima Donut Station",
    feedback:
      "Lo que más me sorprendió de Santi fue su capacidad para transformar nuestras ideas en un sitio web funcional y hermoso que conecta con nuestros clientes.",
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
  {
    name: "Karla García",
    title: "Especialista en Educación, Cognitribu",
    feedback:
      "Santi no solo creó un sitio web increíble, sino que también entendió perfectamente la esencia de nuestro negocio y cómo reflejarla en cada detalle.",
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
];

export const CONTACT_CONTENT = {
  headline: "Trabajemos en algo increíble.",
  description:
    "Creamos juntos un sitio web que refleje la esencia de tu marca, atraiga clientes y haga destacar tu negocio en el mundo digital. ¡Innovemos juntos!",
  email: "morenoestradasantiago@gmail.com",
  personal: "Descubre más sobre mí y mi trabajo en mi página personal, un sitio dinámico con diseño único y objetos 3D interactivos. ¡Explora una experiencia diferente!",
  sitio_web: "https://santis-personal-portfolio.netlify.app/",
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/santii.lifts/",
      ariaLabel: "Sigueme en Instagram",
      icon: "RiInstagramLine",
    },
    {
      platform: "GitHub",
      url: "https://github.com/Tinieblas71?tab=repositories",
      ariaLabel: "Mira mi perfil de Github",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/santiago-moreno-estrada-885b92339/",
      ariaLabel: "Conecta conmigo en mi perfil de Linkedin",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Created by Santi M. All rights reserved.`,
};
