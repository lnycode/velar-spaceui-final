export default {
  content: {
    './src/**/*.{ts,tsx}',
  },
  theme: {
     extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}


module.exports = {
  content: ['./pages/**/*.{js,tx,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hussar: ['HussarBold',' sans-serif']
       }
     }
   },
   plugins: []
 };
