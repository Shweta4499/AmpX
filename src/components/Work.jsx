import React from "react";

// Yeh array mein saare projects ki details store ki gayi hain
const projects = [
  {
    title: "💼 Freelance Portfolio Website",
    description: "A professional, fully responsive portfolio website designed for a freelance client to showcase their skills, projects, and contact information. Built with modern frontend technologies, animated scroll effects, and a sleek UI for both desktop and mobile users.",
    image: "/assets/projects/pruthvi.png", // ← Replace with actual image path
    preview: "https://kulboyraj.com/" // ← Replace with actual deployed link
  }
  ,
  {
    title: "🧑‍💻 Personal Portfolio Website",
    description: "A futuristic, animated portfolio website built with React, TailwindCSS, and Three.js. Includes 3D interactions, scroll-based animations, a dynamic project showcase, and Firebase backend for live content updates. Designed to be both elegant and fully responsive.",
    image: "/assets/projects/profile.png", // Replace with actual image path
    preview: "https://amp-x.vercel.app/" // Replace with your deployed link
  }
,
  {
    title: "☕ Cozy Cafe Website",
    description: "A modern, fully responsive website built for a cafe. Features include an interactive menu, reservation form, location map, and smooth animations to provide a warm and inviting user experience. Designed to showcase the cafe's brand and ambiance effectively.",
    image: "/assets/projects/cafe.png", // ← Replace with actual image path
    preview: "https://cafe-website-sable-nine.vercel.app/", // ← Replace with your deployed link
  },
  
  {
    title: "🧶 Crochet Shop Website",
    description: "An elegant and responsive ecommerce-style website built for a crochet and handmade crafts shop. Features product showcases, category browsing, cart functionality, and a warm aesthetic to match the handmade brand identity. Optimized for both mobile and desktop users with smooth navigation and clean UI.",
    image: "/assets/projects/crochet.png", // ← Replace with actual image path
    preview: "https://crochet-six.vercel.app/", // ← Replace with actual deployed link
  },
  
  {
    title: "PureMark Agency 🚀",
    description: "PureMark Agency empowers businesses with performance-driven marketing solutions, combining strategy and creativity to deliver real results.",
    image: "/assets/projects/pure.jpg", // Replace with actual image path

    preview: "https://puremarkagency.vercel.app/", // ✅ Add https://
  }
  ,
  
  {
    title: "📽️ Landing Page for Strawberry Farm",
    description: "An immersive landing experience featuring a custom-branded intro with background video and a smooth Lottie animation loader. Designed to highlight freshness and nature-driven storytelling for the farm's digital identity.",
    image: "/assets/projects/strawberry.jpg",
    preview: "https://strawberry-farm-one.vercel.app",
  }
  ,
  {
    title: "🛒 Ecommerce Website",
    description: "A modern and fully responsive Ecommerce platform built with React.js and styled with CSS Modules. Features include dynamic product pages, category filtering, cart functionality, and smooth animations. Designed for seamless user experience and optimized performance across devices.",
    image: "/assets/projects/ecom.jpg", // Replace with your actual image path
    preview: "https://ecommerce-seven-woad-44.vercel.app/" // Replace with your deployed link
  }
  
  ,{
    title: "🌿  Hair Oil Product Website",
    description: "A beautifully crafted, fully responsive Ayurvedic hair oil website built using pure HTML, CSS, and JavaScript. Features elegant scroll animations, soothing visuals, product highlights, and an organic color palette to reflect the brand's natural essence. Ideal for wellness, skincare, or herbal product showcases.",
    image: "/assets/projects/oil.png", // Make sure this image exists in your public folder
    preview: "https://oil-dusky.vercel.app/" // Replace with actual deployed link
  }
  
  ,
  {
    title: "🍕 Pizza Website",
    description: "SVG-based interactive pizza builder with animated toppings and 3D style.",
    image: "/assets/projects/pizza.jpg",
    preview: "https://shweta4499.github.io/snackstack-animation/",
  },
  {
    title: "🌐 Brand Website Preview – Digital Design Agency",
    description: "A modern, fully responsive website built for a digital design agency. Features include smooth scroll transitions, interactive sections, and adaptive layouts that ensure a seamless experience across all devices. Crafted to showcase creativity, services, and brand identity with clean UI and subtle motion effects.",
    image: "/assets/projects/agency.jpg",
    preview: "https://youtu.be/_TxT6FxEqUA",
  },
  {
    title: "Mirror Landing Page",
    description: "3D mirror landing page with GSAP & ScrollTrigger.",
    image: "/assets/projects/mirror.jpg",
    preview: "https://youtu.be/FY3ml3qAia0",
  },
  
 
  {
    title: "Coffee GSAP Site",
    description: "Smooth animated coffee-themed page using GSAP + CSS.",
    image: "/assets/projects/coffie.jpg",
    preview: "https://youtu.be/j55O4xlG-dQ",

  },

 
 
  
  {
    title: "🎬 Netflix Clone (React)",
    description: "A clean, responsive Netflix clone built with React.js. Replicates the Netflix homepage UI with reusable components, dynamic routing, hover effects, and mock content cards — all designed for a smooth browsing experience.",
    image: "/assets/projects/Netflix.png",
    preview: "https://github.com/Shweta4499/Netflix-clone.git",
  }
  ,{
    title: "🌿 Lekha Hair Oil – Ayurvedic Product Website",
    description: "A beautifully crafted, fully responsive Ayurvedic hair oil website built using pure HTML, CSS, and JavaScript. Features elegant scroll animations, soothing visuals, product highlights, and an organic color palette to reflect the brand's natural essence. Ideal for wellness, skincare, or herbal product showcases.",
    image: "/assets/projects/lekha.png", // Make sure this image exists in your public folder
    preview: "https://youtu.be/PkPDHe8bHvA" // Replace with actual deployed link
  }
  
  
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          My Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {project.title}
                  </h3>
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline dark:text-blue-300"
                  >
                    🔗 Preview
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
