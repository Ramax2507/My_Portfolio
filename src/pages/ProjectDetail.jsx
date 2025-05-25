 import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import projects from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find project by id (assuming id is string)
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        <h2 className="text-3xl font-bold mb-4">Project not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto rounded-lg shadow mb-6"
      />
      <p className="mb-6 text-gray-700 dark:text-gray-300">{project.description}</p>

      {project.features && project.features.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      <div className="flex space-x-4 mt-8">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            View Code
          </a>
        )}
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Back
        </button>
      </div>
    </main>
  );
};

export default ProjectDetail;

