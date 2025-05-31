import React, { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import projects from '../../data/projects';
import { Link } from 'react-router-dom';

const Projects = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // adjust as needed
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900/80 py-20 px-4 relative rounded-xl border-4  border-white/60  backdrop-blur-2xl shadow-lg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Projects
        </h2>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <FaChevronRight />
        </button>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide px-2"
        >
          {projects.map(({ id, title,description1, description, image, github, live }) => (
            
          <Link
  to={`/projects/${id}`}
  key={id}
  className="transform hover:scale-105 transition-transform duration-300 flex-shrink-0 w-72 sm:w-80"
>
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-[400px]">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3 flex-grow">
        {description1}
      </p>
      <div className="mt-4 flex space-x-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
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
          >
            Live <FaExternalLinkAlt size={14} />
          </a>
        )}
      </div>
    </div>
  </div>
</Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
