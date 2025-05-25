 import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import projects from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, title, description, image, github, live }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">{description}</p>
                <div className="mt-4 flex space-x-4">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                      aria-label={`${title} GitHub Repo`}
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-1"
                      aria-label={`${title} Live Demo`}
                    >
                      Live <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

