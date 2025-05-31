 import { useState } from 'react';
 import logo from '../../assets/images/icons/favicon.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

 return (
  <header className="bg-gray-900 text-white fixed w-full z-50 shadow-md ">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      {/* Logo + Name */}
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Ramachanthar"
          className="w-10 h-10 rounded-full object-cover border-4 border-blue-500"
        />
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors duration-300"
        >
          Ramachanthar Shankar
        </a>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>
    </div>

    {/* Mobile Nav */}
    {menuOpen && (
      <div className="md:hidden bg-gray-800 px-4 pb-4 pt-2 shadow-lg">
        <nav className="flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    )}
  </header> // ← ✅ Don't forget this closing tag!
);


};

export default Header;

