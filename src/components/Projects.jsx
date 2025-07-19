const projects = [
    {
      title: "Smart Waste Management 🗑️",
      description: "IoT-powered city waste tracking with public & municipal dashboards.",
      link: "https://yourprojectlink.com",
    },
    {
      title: "Netflix Clone 🍿",
      description: "A sleek Netflix UI replica using HTML, CSS, and JS.",
      link: "https://yourprojectlink.com/netflix",
    },
    {
      title: "React News App 📰",
      description: "Dynamic news portal fetching live articles using News API.",
      link: "https://yournewsapp.com",
    },
    {
      title: "Hospital Management System 🏥",
      description: "Java-based hospital data manager with GUI and database support.",
      link: "https://yourprojectlink.com/hospital",
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-rose-500 mb-4">💼 My Projects</h2>
        <p className="text-gray-700 mb-10">
          Each project has a piece of my heart 💖 — crafted with care and creativity.
        </p>
  
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="bg-pink-100 hover:bg-pink-200 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-rose-600">{project.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    );
  }
  