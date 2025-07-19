import React from "react";

const Resume = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10" id="resume">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Resume
        </h2>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-pink-600 mb-4">Experience</h3>
            <ul className="space-y-6">
              <li>
                <h4 className="font-semibold text-lg">Python Developer</h4>
                <p className="text-sm text-gray-500">Jan 2024 – Feb 2024</p>
                <p className="text-gray-600 text-sm mt-1">
                  Contributed to real-time project development, focusing on data handling, backend logic, and scripting automation.
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-lg">
                  Graduate Trainee Engineer — Scion Energy Storage
                </h4>
                <p className="text-sm text-gray-500">Dec 2024 – June 2025</p>
                <p className="text-gray-600 text-sm mt-1">
                  Worked as a Quality Engineer in a lithium battery manufacturing unit. 
                  Gained hands-on experience in quality inspection, battery module testing, 
                  servicing protocols, and safety assurance in energy storage systems.
                </p>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-pink-600 mb-4">Education</h3>
            <ul className="space-y-6">
              <li>
                <h4 className="font-semibold text-lg">B.Tech in Electronics and Telecommunication</h4>
                <p className="text-sm text-gray-500">D.K.T.E Society's Textile and Engineering Institute, 2021 – 2025</p>
              </li>
              <li>
                <h4 className="font-semibold text-lg">12th - Science Stream</h4>
                <p className="text-sm text-gray-500"> Gurukul Junior College,A.lat 2019 – 2021</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-pink-600 mb-6">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-gray-700">
            {[
              "HTML", "CSS", "JavaScript", "React",
              "GSAP", "Tailwind", "Three.js", "Git",
              "Framer Motion",  "Locomotive"
            ].map((skill, index) => (
              <div
                key={index}
                className="py-3 px-4 bg-pink-50 rounded-lg shadow-sm hover:bg-pink-100 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-pink-600 text-white py-3 px-6 rounded-full shadow hover:bg-pink-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
