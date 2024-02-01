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
      'sunglow': '#FFD242',
      'davysGray': '#525C60',
      'seasalt': '#FAFAFA',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'], // Escrever font-roboto para usar
      openSans: ['Open Sans', 'sans-serif'] // Escrever font-openSans para usar
    },
  },
};
export const plugins = [];