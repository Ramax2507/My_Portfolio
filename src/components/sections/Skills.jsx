import skills from '../../data/skills.js';

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900/80 py-20 px-4 rounded-xl border-4 border-white/60 backdrop-blur-2xl shadow-lg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Skills & Technologies
        </h2>

        {/* Scrollable grid container */}
        <div
          className="overflow-y-auto max-h-[24rem] pr-2 custom-scrollbar">
        
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map(({ id, name, icon: Icon }) => (
              <div
                key={id}
                className="flex flex-col items-center space-y-2 bg-gray-800 rounded-lg p-4 shadow hover:scale-105 transform transition duration-300"
              >
                {Icon && <Icon className="text-blue-600 dark:text-blue-400" size={40} />}
                <p className="text-gray-200 font-medium">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


