/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'red': '#ff0000',
      'blue': {
        '50': '#eefaff',
        '100': '#d9f2ff',
        '200': '#bceaff',
        '300': '#8edeff',
        '400': '#59c9ff',
        '500': '#33adfe',
        '600': '#1c90f4',
        '700': '#1472d7',
        '800': '#1860b5',
        '900': '#19528f',
        '950': '#143357',
      },
      'green': {
      '50': '#eafff6',
      '100': '#cbffe7',
      '200': '#9cfed4',
      '300': '#5df8c0',
      '400': '#14d796',
      '500': '#00d190',
      '600': '#00ab76',
      '700': '#008962',
      '800': '#006c4f',
      '900': '#005843',
      '950': '#003227',
      },
      
  
    
    }
  },
  plugins: [],
}
