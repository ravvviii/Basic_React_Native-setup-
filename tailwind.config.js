/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}",'./components/**/*.{js,jsx,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['outfit', 'sans-serif'], // Add your custom font here
        'outfit-bold': ['outfit-bold', 'sans-serif'],
        'outfit-medium': ['outfit-medium', 'sans-serif'],
      },
      colors: {
        primary: "#030014",
        army_bold: "#2B411C",
        army_medium: "#5B7742",
        bc:"#fefffe",
        secondary: '#151312',
        test:'#f0611a',
        light: {
          100: '#D6C6FF',
          200: '#A8B5DB',
          300: '#9CA4AB',
        },

        dark: {
          100: '#221f3d',
          200: '#0f0d23'
        },

        accent: '#AB8BFF'
      }
    },
  },
  plugins: [],
}