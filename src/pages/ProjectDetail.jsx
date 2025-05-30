import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id.toString() === id);

  if (!project) {
    return (
      <div className="text-center py-20 text-red-600">
        Project not found. <Link to="/" className="underline">Go home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 bg-white/10 backdrop-blur-md">
      <div className="max-w-4xl mx-auto p-6 bg-white/30 dark:bg-gray-800/40 rounded-xl border border-white/50 shadow-lg">
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h1>
        <p className="text-lg text-gray-800 dark:text-gray-300">{project.description}</p>
        <div className="mt-6 space-x-4">
          {project.github && (
            <a href={project.github} target="_blank" className="text-blue-600 underline">
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" className="text-blue-600 underline">
              Live Demo
            </a>
          )}
        </div>
        <Link to="/" className="block mt-10 text-sm text-gray-700 dark:text-gray-300 underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
