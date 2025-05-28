 import profileImg from '../../assets/images/profile/profile.png'; // Replace with your actual image path

const About = () => {
  return (
    <section id="about" className="bg-white/70 dark:bg-gray-900/80 rounded-2xl p-8 border-4  border-white/60  backdrop-blur-2xl shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="w-full md:w-1/3">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
            />
          </div>

          {/* About Text */}
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Hi! I'm <span className="font-semibold text-blue-600">Ramachanthar</span>, a passionate
              software developer with a love for crafting clean and efficient code.
              My mission is to solve real-world problems through intuitive digital solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              With experience in full-stack development, I enjoy bringing designs to life,
              optimizing user experiences, and constantly exploring new technologies. I believe
              in continuous learning and pushing the boundaries of what's possible on the web.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me creating memes, exploring AI tools,
              or experimenting with futuristic story ideas. 🌟
            </p>
            <a
              href="/assets/documents/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

