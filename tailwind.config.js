/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-color': "#159947",
        'secondary-color': "#272727",
        'grey-color': '#B5B5B5'
      }
    },
    fontFamily: {
      logo: ['Titan One'],
      body: ['Nunito']
    }
  },
  plugins: [],
}

