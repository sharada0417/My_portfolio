import main from '@/assets/main.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      {/* text div */}
      <div className="text-center z-10 w-1/2 flex flex-col">
        <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
        <span className="typing">
               Hi, I'm Sharada
        </span>
        </h1>
        <p className="text-gray-400 text-lg mb-6 -mt-3 max-w-lg mx-auto">
          I’m a full-stack developer who loves crafting clean, scalable web
          applications. My goal is to build solutions that offer both exceptional
          performance and a delightful user experience.
        </p>
            {/* Social Icons: centered horizontally */}
        <div className="w-full flex justify-center mb-6">
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/sharada417 "
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/sharada0417 "
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
          </div>

        {/* Mobile Hamburger */}
        <div
          className="w-7 h-5 relative cursor-pointer z-40 md:hidden ml-4"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          &#9776;
        </div>
      </div>
        <div className="flex justify-center space-x-4">
          <Link
            to="/projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* picture div */}
      <div className="w-1/2 flex items-center justify-center mt-10">
        <img
          src={main}
          alt="main"
          className="w-[300px] h-[250px] scale-150"
        />
      </div>
    </div>
  );
};
