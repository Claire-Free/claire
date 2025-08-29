module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // theme: {
  //   extend: { 
  //     fontFamily: {
  //     script: ['"Dancing Script"', 'cursive'], // Or use a better modern script like "Playfair Display"
  //     ballet: ['"Ballet"', 'cursive'],
  //     serif: ['Playfair Display', 'serif'],
  //   },},
  // },
  


};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         cormorant: ['"Cormorant Garamond"', 'serif'],
        serif: ['Playfair Display', 'serif'],  // headings
        sans: ['Inter', 'sans-serif'],         // body
        accent: ['Sacramento', 'cursive'],     // accents
      },
    },
  },
  plugins: [],
}
