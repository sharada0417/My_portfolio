import React from "react";

const Education = () => {
  const educationData = [
    {
      duration: "2022/10 - 2025/08",
      degree: "Bachelor of Science in Information Technology",
      university: "University of Jaffna",
    },
    {
      duration: "2022/6",
      degree: "Diploma in English",
      university: "Esoft Metro Campus",
    },
    {
      degree: "AI driven Fullstack Developer",
      university: "STEM Link (Pvt) Ltd",
      certificateLink: "https://drive.google.com/drive/folders/1aZHddzAOpxOyx9v9IldAzZQZqXh9ae2-",
    },
    {
      degree: "FullStack Developer",
      university: "ACPT - Academy of Computer Programming and Training",
      certificateLink: "https://drive.google.com/drive/folders/1aZHddzAOpxOyx9v9IldAzZQZqXh9ae2-",
    },
    {
      degree: "Front-End Developer",
      university: "University of Moratuwa",
      certificateLink: "https://drive.google.com/drive/folders/1aZHddzAOpxOyx9v9IldAzZQZqXh9ae2-",
    },
    {
      degree: "Backend Developer",
      university: "University of Moratuwa",
      certificateLink: "https://drive.google.com/drive/folders/1aZHddzAOpxOyx9v9IldAzZQZqXh9ae2-",
    },
    {
      degree: "Java Developer",
      university: "Evotech Education (Pvt) Ltd",
      certificateLink: "https://drive.google.com/drive/folders/1aZHddzAOpxOyx9v9IldAzZQZqXh9ae2-",
    },
  ];

  return (
    <section className="min-h-screen -mt-2 flex flex-col items-center bg-slate-900 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="relative p-6 rounded-xl border border-white/20 bg-slate-800 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)] transition"
          >
            <p className="text-gray-400 font-semibold">{edu.duration}</p>
            <h3 className="text-white text-xl font-bold mt-1">{edu.degree}</h3>
            <p className="text-gray-300 mt-1">{edu.university}</p>

            {/* Optional Certification Button */}
            {edu.certificateLink && (
              <div className="mt-4 flex justify-end">
                <a
                  href={edu.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white py-1 px-4 rounded text-sm hover:bg-blue-600 transition"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
