// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Pages/subpages/Home.jsx",
    "./src/Pages/subpages/Footer.jsx",
    "./src/Pages/subpages/Feature.jsx",
    "./src/Pages/subpages/Main.jsx",
    "./src/Pages/subpages/SideBar.jsx",
    "./src/Pages/Homepage.jsx",
    "./src/Pages/MoviePage.jsx",
    "./src/Components/Card.jsx"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '312px',
      }
    },
  },
  plugins: [],
}

