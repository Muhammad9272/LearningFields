/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#8FA98F',
        'secondary-clay': '#B48A5A',
        'bg-ivory': '#FAF9F6',
        'charcoal': '#2F2F2F',
        'light-wash': '#E9EDE6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
