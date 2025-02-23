import projects1 from "../assets/1.jpg";
import projects2 from "../assets/2.jpg";
import projects3 from "../assets/3.jpg";

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
    "Tu negocio al siguiente nivel.",
  description:
    "Ayudo a negocios locales a crecer y adaptarse al mundo moderno mediante soluciones digitales accesibles y efectivas.",
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
    "Con experiencia en desarrollo web, aplicaciones y diseño, transformo tus ideas en soluciones digitales.",
    "Además, ofrezco servicios como campañas publicitarias, gestión de redes sociales, creación de contenido y estrategias de marketing.",
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
    "Hagamos juntos un sitio web que refleje la esencia de tu marca, atraiga clientes y haga destacar tu negocio en el mundo digital. ¡Innovemos juntos!",
  email: "morenoestradasantiago@gmail.com",
  personal: "Descubre más sobre mí y mi trabajo en mi página personal, un sitio dinámico con diseño único y objetos 3D interactivos. ¡Explora una experiencia diferente!",
  sitio_web: "https://santis-personal-portfolio.netlify.app/",
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/santii.lifts/",
      ariaLabel: "Sigueme en Instagram",
      icon: "instagram",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/santii.lifts/",
      ariaLabel: "Mira mi perfil de Facebook",
      icon: "facebook-circle",
    },
    {
      platform: "GMail",
      url: `mailto:"morenoestradasantiago@gmail.com"`,
      ariaLabel: "Conecta conmigo en mi correo personal",
      icon: "gmail",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Created by Santi M. All rights reserved.`,
};
