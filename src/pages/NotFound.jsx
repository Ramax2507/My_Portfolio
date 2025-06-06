 import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 px-4">
      <h1 className="text-6xl font-bold text-gray-100 mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

