module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FFFF00",
      },
      backgroundImage: theme => ({
        'hero': "url('/src/img/h1_hero1.png')",

      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
