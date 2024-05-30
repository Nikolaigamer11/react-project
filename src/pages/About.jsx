import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 mb-8">
          We are a creative agency dedicated to crafting unique digital experiences.
        </p>
        <div className="flex justify-center space-x-4">
          <div className="bg-blue-500 p-4 rounded-full animate-bounce">🏀</div>
          <div className="bg-red-500 p-4 rounded-full animate-spin">🌟</div>
          <div className="bg-green-500 p-4 rounded-full animate-pulse">🔥</div>
        </div>
      </div>
    </div>
  );
}

export default About;
