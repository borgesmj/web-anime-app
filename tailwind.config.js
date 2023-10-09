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

    }
  },
  plugins: [],
}
