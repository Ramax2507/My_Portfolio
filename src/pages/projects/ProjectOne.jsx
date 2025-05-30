import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ProjectOne = () => {
  return (
    <div className="min-h-screen bg-white/30 dark:bg-gray-900/60 backdrop-blur-xl py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/70 dark:bg-gray-800/70 p-8 rounded-xl shadow-xl">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Project Title Here
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Detailed description of your project goes here. Explain the problem,
          solution, tools used, and any challenges you overcame.
        </p>

        {/* Slideshow (Example with images, replace with Swiper or any lib later) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <img src="src/assets/images/project1/img1.jpg" alt="Screenshot 1" className="rounded-lg shadow" />
          <img src="src/assets/images/project1/img2.jpg" alt="Screenshot 2" className="rounded-lg shadow" />
        </div>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">Tech Stack:</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Node.js / Express</li>
          <li>MongoDB</li>
        </ul>

        <div className="mt-6 space-x-4">
          <a
            href="https://github.com/yourusername/project1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            View Code
          </a>
          <a
            href="https://live-demo-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
