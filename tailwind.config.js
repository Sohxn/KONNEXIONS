/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
       fontFamily:{
        playfair: ["Playfair Display" , "sans-serif"] ,
        oswald: ["Oswald" , "sans-serif"],
        roboto: ["Roboto Mono" , 'monospace']
       }
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
}
