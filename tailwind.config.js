/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'fondoHome': "url('./assets/home.png')",
        'adsfondo': "url('./assets/adsFondo.png')",
        'dwfondo': "url('./assets/dwFondo.png')",
        'mofondo': "url('./assets/moFondo.png')",
        'rsfondo': "url('./assets/rsFondo.png')",
        'seofondo': "url('./assets/fondoseo.jpg')",
        'cwfondo': "url('./assets/copyw.jpg')",
        'emfondo': "url('./assets/emailmarketing.jpg')",
        'mefondo': "url('./assets/medico.jpg')",
        'fifondo': "url('./assets/fisio.jpg')",
        'psifondo': "url('./assets/psico.jpg')",
        'nufondo': "url('./assets/diet.jpg')",
        'denfondo': "url('./assets/dentista.jpg')",
        'enfondo': "url('./assets/entrenar.jpg')",
        'support':"url('./assets/support.png')"


      }
    },
    colors: {
      'verde': '#71C648',
      'azul': '#194973',
      'gris': '#5A6D6D',
      'blanco': '#ffffff',
      'negro': '#000',
    },
  },
  plugins: [],
}

