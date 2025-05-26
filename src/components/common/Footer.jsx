 import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Ramax2507',
      icon: FaGithub
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ramachantharshankar',
      icon: FaLinkedin
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: FaEnvelope
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="mt-10 py-6 text-center bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Ramachanthar</h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate developer creating amazing digital experiences. 
              Always learning, always building.
            </p>
            <button 
              onClick={scrollToTop}
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center space-x-2"
            >
              <span>Back to top</span>
              <span>↑</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">
                Projects
              </a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300">
                Skills
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-400 text-sm">
              Let's build something amazing together!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center">
              © {currentYear} Ramachanthar. Made with{' '}
              <FaHeart className="text-red-500 mx-1" size={14} />
              and lots of coffee.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
