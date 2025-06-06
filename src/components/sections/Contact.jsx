import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_zwo6jsr',     // Replace with your EmailJS Service ID
        'template_q371oxu',    // Replace with your EmailJS Template ID
        formRef.current,
        'rdr31zMQf0Y0x2QMM'      // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          console.log('Email sent successfully');
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-900/80 py-20 rounded-xl border-4  border-white/60  backdrop-blur-2xl shadow-lg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-gray-300 mb-10">
          Feel free to reach out through the form below or connect with me via social platforms.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white col-span-2 md:col-span-1"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white col-span-2 md:col-span-1"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white col-span-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-300 col-span-2"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <p className="mt-6 text-green-600 dark:text-green-400 font-semibold">
            Thank you! Your message has been sent.
          </p>
        )}

        <div className="mt-12 flex justify-center space-x-6 text-gray-600 dark:text-gray-400">
          <a
            href="mailto:ramachantharshankar@gmail.com"
            className="hover:text-blue-500 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ramachanthar-shankar-67237627b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Ramax2507"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
