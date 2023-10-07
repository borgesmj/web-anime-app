/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
    colors: {
      'black': '#000000',
      'red': '#ff0000',
      'white': '#ffffff',
      'primary':{
        '100':'#007AFF',
        '200':'#69a8ff',
        '300':'#e1ffff'
      },
      'accent':{
        '100':'#FFA500',
        '200':'#904a00'
      },
      'text':{
        '100':'#333333',
        '200':'#5c5c5c'
      },
      'bg':{
        '100':'#F5F9FF',
        '200':'#ebeff5',
        '300':'#c2c6cc',
      },
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

    }
  },
  plugins: [],
}
