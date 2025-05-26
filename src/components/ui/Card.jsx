 import React from 'react';

const Card = ({ children, className = '', shadow = true, rounded = true }) => {
  return (
   <div
      className={`bg-white dark:bg-gray-800
        ${shadow ? 'shadow-xl' : ''}
        ${rounded ? 'rounded-lg' : ''}
        p-6 transition-transform duration-300 hover:scale-[1.02]
        ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

