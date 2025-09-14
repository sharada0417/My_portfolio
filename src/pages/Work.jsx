import React from "react";

const Work = () => {
  const workData = [
    {
      duration: "2022/9 – 2022/12",
      company: "Flexicode (Pvt) Ltd",
      details:
        "Developed and maintained web interfaces using React.js with reusable components for scalability. Improved UI/UX with responsive design and optimized state management using React hooks and Context API. Integrated RESTful APIs and debugged UI issues for a smooth user experience.",
      letterLink: "https://drive.google.com/your-letter-link", // add your letter link here
    },
  ];

  return (
    <section className="min-h-screen flex justify-center -mt-3 bg-slate-900 py-10">
      <div className="w-full max-w-2xl">
        {workData.map((job, idx) => (
          <div
            key={idx}
            className="relative p-6 rounded-xl border border-white/20 bg-slate-800 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)] transition flex flex-col"
          >
            {/* Text content */}
            <p className="text-gray-400 font-semibold">{job.duration}</p>
            <h3 className="text-white text-xl font-bold mt-1">{job.company}</h3>
            <p className="text-gray-300 mt-2">{job.details}</p>

            {/* Button aligned bottom-right */}
            {job.letterLink && (
              <div className="mt-4 self-end">
                <a
                  href={job.letterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white py-2 px-6 rounded text-sm hover:bg-blue-600 transition"
                >
                  View Letter
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
