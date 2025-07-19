import React from "react";

// Yeh array mein saare projects ki details store ki gayi hain
const projects = [
  {
    title: "Mirror Landing Page",
    description: "3D mirror landing page with GSAP & ScrollTrigger.",
    image: "/assets/projects/mirror.jpg",
    preview: "https://shweta4499.github.io/Lumoir/",
  },
  {
    title: "📽️ Animated Loader",
    description: "Custom video and Lottie loader experience for brand intro.",
    image: "/assets/projects/strawberry.jpg",
    preview: "https://your-preview-link.com/loader",
  },
  {
    title: "🍕 Pizza Website",
    description: "SVG-based interactive pizza builder with animated toppings and 3D style.",
    image: "/assets/projects/pizza.jpg",
    preview: "https://your-preview-link.com/pizza",
  },
 
  {
    title: "Coffee GSAP Site",
    description: "Smooth animated coffee-themed page using GSAP + CSS.",
    image: "/assets/projects/coffie.jpg",
    preview: "https://shweta4499.github.io/coffee-site/",
  },
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
