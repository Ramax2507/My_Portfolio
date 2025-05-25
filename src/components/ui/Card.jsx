 import React from 'react';

const Card = ({ children, className = '', shadow = true, rounded = true }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 ${
        shadow ? 'shadow-lg' : ''
      } ${rounded ? 'rounded-lg' : ''} p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

