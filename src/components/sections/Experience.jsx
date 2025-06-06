import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: 'Project Developer Intern',
    company: 'Tamilnadu State Council For Higher Education',
    date: 'Dec 2024 - present',
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
    title: 'Software Developer Intern',
    company: 'Prodigy Tech',
    date: 'Jan 2023 - Mar 2023',
    description:
      'Worked on real-world software projects, collaborated with developers, and contributed to building internal tools and web interfaces.',
  },
  {
    title: 'Python Developer Intern',
    company: 'TechnoHacks EduTech',
    date: 'Oct 2022 - Nov 2022',
    description:
      'Worked on real-world software projects, collaborated with developers, and contributed to building internal tools and web interfaces.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-900/80 rounded-xl py-20 px-4 border-4 border-white/60 backdrop-blur-2xl shadow-lg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          <FaBriefcase className="inline mr-2 text-blue-600" />
          Experience
        </h2>

        <div className="overflow-y-auto max-h-[24rem] pr-2 custom-scrollbar">
          <div className="space-y-10 relative border-l border-gray-700 pl-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-md"></span>
                <div className="bg-gray-800 p-6 rounded-md shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <h4 className="text-md text-blue-600 font-medium">{exp.company}</h4>
                  <p className="text-sm text-gray-400 mb-2">{exp.date}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
