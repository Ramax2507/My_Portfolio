 import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Prodigy Tech',
    date: 'Sep 2024 - Sep 2024',
    description:
      'Worked on real-world software projects, collaborated with developers, and contributed to building internal tools and web interfaces.',
  },
  {
    title: 'AI Developer - Event Participant',
    company: 'Learn with GUVI',
    date: 'Aug 2024',
    description:
      'Built projects using AI APIs including image and caption generation, RAG models, and deployed apps using Streamlit.',
  },
  {
    title: 'YouTube Content Creator',
    company: 'Naagin Fan Channel (Former)',
    date: '2020 - 2023',
    description:
      'Created and edited fan videos, grew a community of followers, and gained insights into digital content and audience engagement.',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-white dark:bg-gray-900 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          <FaBriefcase className="inline mr-2 text-blue-600" />
          Experience
        </h2>

        <div className="space-y-10 relative border-l border-gray-300 dark:border-gray-700 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></span>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow-md transition duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <h4 className="text-md text-blue-600 font-medium">{exp.company}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.date}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

