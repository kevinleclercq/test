/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'header': '0px 2px 20px 0px rgba(0, 0, 0, 0.0625)', // Notez que 0F en hexadécimal correspond à 0.0625 en décimal
      },
      colors: {
        'y-gray': '#808080',
        'y-gray-light': '#EEEFF2',
        'y-blue': '#1C366B',
      }
    },
  },
  plugins: [],
}
