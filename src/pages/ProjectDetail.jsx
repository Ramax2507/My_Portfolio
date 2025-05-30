import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';

// Load all images in /src/assets/images dynamically
const images = import.meta.glob('../assets/images/**/*.{jpg,png,jpeg,webp}', { eager: true });

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

  // Resolve the actual image URL using Vite's glob import
  const resolvedImage = images[`../${project.image1}`]?.default || '';

  return (
    <div className="min-h-screen py-20 px-4 bg-white/10  backdrop-blur-md">
      <div className="max-w-6xl mx-auto p-6 bg-white/30 dark:bg-gray-900/90 rounded-xl border border-white/50 shadow-lg">
        {resolvedImage && (
          <img
            src={resolvedImage}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}
        <h1 className="text-3xl text-center font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h1>
        <div
  className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed space-y-4"
  dangerouslySetInnerHTML={{ __html: project.description }}
/>
<h2 className="mt-8 text-2xl  font-bold mb-4 text-gray-900 dark:text-white">SKILLS ACQUIRED</h2>
<div
  className="mt-0"
  dangerouslySetInnerHTML={{ __html: project.techStack}}
/>
        <div className="mt-6 flex justify-center flex-wrap gap-4">
  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition border border-color-white ) {
        
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.8c-3.2.7-3.8-1.5-3.8-1.5-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.2 1.4 4 .9.1-.9.5-1.4.8-1.7-2.6-.3-5.4-1.3-5.4-5.7 0-1.2.5-2.3 1.2-3.1-.1-.3-.5-1.4.1-2.8 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.4.2 2.5.1 2.8.8.8 1.2 1.9 1.2 3.1 0 4.4-2.8 5.4-5.5 5.7.5.4.9 1.2.9 2.5v3.6c0 .3.2.6.8.5A10.5 10.5 0 0 0 23.5 12c0-6.3-5.2-11.5-11.5-11.5z" />
      </svg>
      GitHub
    </a>
  )}
  {project.liveDemoUrl && (
    <a
      href={project.liveDemoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-500 transition"
    >
      🌐 Live Demo
    </a>
  )}
</div>

<Link
  to="/"
  className="inline-block mt-10 px-4 py-2 border border-gray-400 text-gray-800 dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  ← Back to Home
</Link>

      </div>
    </div>
  );
};

export default ProjectDetail;
