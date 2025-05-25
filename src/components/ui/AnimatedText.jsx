 import { useState, useEffect } from 'react';

const AnimatedText = ({ text, speed = 100, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className={className} aria-label={text} role="text">
      {displayedText}
      <span className="blinking-cursor">|</span>
      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-start infinite;
          color: inherit;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
};

export default AnimatedText;

