// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800 mb-8 animate-bounce">404</h1>
        <p className="text-2xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="text-blue-500 hover:underline text-lg">
          Go back home
        </Link>
        <div className="mt-16">
          <svg className="w-24 h-24 mx-auto animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18a8 8 0 108 8 8.009 8.009 0 00-8-8zm0 2.832A5.168 5.168 0 116.832 12 5.174 5.174 0 0112 6.832z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
