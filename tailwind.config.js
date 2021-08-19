module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FFFF00",
        black: '#0b0c10'
      },
      backgroundImage: theme => ({
        'hero': "url('/src/img/h1_hero1.png')",
        'banner': "url('/src/img/banner.png')"

      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
