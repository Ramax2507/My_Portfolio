import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectOne = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">AI Chatbot Web App</h1>
        <img
          src="/assets/project1.png"
          alt="AI Chatbot"
          className="w-full h-64 object-cover rounded-lg shadow mb-6"
        />

        <p className="text-lg mb-4">
          This AI chatbot allows users to ask questions, get answers using GPT models, and supports
          voice input. Built using React, Tailwind, and OpenAI API.
        </p>

        <ul className="list-disc list-inside mb-6">
          <li>Technology: React, Tailwind CSS, OpenAI API, Node.js</li>
          <li>Features: Voice-to-text, Chat memory, Dark Mode</li>
        </ul>

        <div className="flex space-x-4">
          <a
            href="https://github.com/your-username/chatbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://chatbot-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectOne;
