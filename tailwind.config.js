/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Poppins', 'sans-serif'], // replace default sans
        poppins: ['Poppins', 'sans-serif'], // optional named variant
        bitcount: ['Bitcount Prop Single','system-ui'],
      },
    },
  },
  plugins: [],
}

