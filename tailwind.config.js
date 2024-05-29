// tailwind.config.js

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss/postcss7-compat') // Add this line
  ],
};
