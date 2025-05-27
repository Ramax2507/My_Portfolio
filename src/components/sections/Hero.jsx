 import profileImg from '../../assets/images/profile/profile.png'; // Replace with your actual image path
 import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-blue-900/90 via-blue-800/70 to-blue-700 text-white py-24 px-4 rounded-xl border-4  border-white/60  backdrop-blur-2xl shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="text-center lg:text-left space-y-6 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-blue-300">Ramachanthar</span> 👋
          </h1>
          <p className="text-lg text-blue-100">
            A passionate Full Stack Developer focused on building clean and user-friendly applications. Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-blue-200 transition"
            >
              Let's Talk
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 border border-white rounded-md hover:bg-white hover:text-blue-800 transition"
            >
              View Projects <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={profileImg}
            alt="Ramachanthar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

