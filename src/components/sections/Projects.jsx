export const Projects = () => {
  const projects = [
    {
      title: "Vista Stay",
      desc: "AI-powered hotel booking app for desktop users with advanced hotel search using OpenAI. Features include hotel booking, user reviews, and secure Stripe-based payments.",
      tech: ["React", "Redux", "Tailwind CSS", "Node.js", "TypeScript", "MongoDB", "Express", "OpenAI","Stripe"],
      gitLink: "https://github.com/VistaStay",
      deployLink: "https://hotelapp-vistastay-frontend-sharada.netlify.app/",
    },
    {
      title: "Disaster Watch",
      desc: "Developed DisasterWatch, a web and mobile app for real-time disaster alerts, crowd-sourced reporting, predictive modeling, and resource mapping. Designed to enhance disaster and customizable alerts.",
      tech: ["React Native", "React.js", "Node.js", "Express", "MongoDB", "Next.js"],
      gitLink: "https://github.com/DisasterWatchHQ",
      deployLink: "https://disasterwatch.vercel.app/",
    },
    {
      title: "CelebrateHub",
      desc: "AI-powered party places booking app for desktop users with advanced party places search using OpenAI. Features include party places booking, user reviews, and secure Stripe-based payments.",
      tech: ["React","Redux", "Tailwind CSS", "Node.js", "TypeScript", "MongoDB", "Express", "OpenAI", "Stripe"],
      gitLink: "https://github.com/sharada0417/Celebrate_Hub",
      deployLink: "https://celebratehub.netlify.app/",
    },
    {
      title: "SecondChance",
      desc: "An e-commerce platform for buying and selling affordable second-hand goods, offering users a sustainable shopping experience with product listings, secure payments, and user-friendly features.",
      tech: ["Spring Boot", "AWS S3", "JWT", "React", "Redux", "Tailwind CSS"],
      gitLink: "https://github.com/yourusername/realtime-chat",
      // No deployLink here
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)] transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-12">
                {project.tech.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.deployLink ? (
                <>
                  {/* Left-bottom Git Button */}
                  <div className="absolute bottom-4 left-6">
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white py-1 px-4 rounded text-sm hover:bg-blue-600 transition"
                    >
                      View Git
                    </a>
                  </div>

                  {/* Right-bottom Deploy Button */}
                  <div className="absolute bottom-4 right-6">
                    <a
                      href={project.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white py-1 px-4 rounded text-sm hover:bg-green-600 transition"
                    >
                      Deploy
                    </a>
                  </div>
                </>
              ) : (
                // Only Git button aligned to right if no deployLink
                <div className="absolute bottom-4 right-6">
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white py-1 px-4 rounded text-sm hover:bg-blue-600 transition"
                  >
                    View Git
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
