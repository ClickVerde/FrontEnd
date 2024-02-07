/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'emerald': '#7BD389', // Escrever (attribute-)emerald para usar
      'darkMossGreen': '#3E5622',
      'sunglow': {
        light: '#FFE499',
        DEFAULT: '#FFD242'
      },
      'davysGray': '#525C60',
      'seasalt': '#f9f8f8',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'], // Escrever font-roboto para usar
      openSans: ['Open Sans', 'sans-serif'], // Escrever font-openSans para usar
      yellowtail: ['Yellowtail', 'sans-serif']
    },
  },
};
export const plugins = [];