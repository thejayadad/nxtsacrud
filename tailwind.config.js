/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': 'rgba(17, 25, 40, 0.75)',
        'thbg': '#2d3748', // Gray 800
      },
      fontSize: {
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
      },
      borderRadius: {
        'xl': '12px',
      },
      boxShadow: {
        'lg': '0 10px 15px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
