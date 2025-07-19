// components/Experience.jsx

export default function Experience() {
    const jobs = [
      {
        role: "Graduate Trainee Engineer",
        company: "Scion Energy Storage",
        period: "Dec 2024 – June 2025",
        description:
          "Conducted lithium batter quality inspections, identified m faults, and ensured compliance with service standards. Worked collaboratively with the servicing team to maintain high customer satisfaction and vehicle reliability.",
      },
      
    ];
  
    return (
      <section
        id="experience"
        className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Experience</h2>
          <ul className="space-y-6">
            {jobs.map((job, index) => (
              <li
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold">
                  {job.role} @ {job.company}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {job.period}
                </p>
                <p className="mt-2 text-base">{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  