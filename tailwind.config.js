/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        
        "Merriweather-Bold": ["Merriweather-Bold", "sans-serif"],
        "Merriweather-Light": ["Merriweather-Light", "sans-serif"],
        "Merriweather-Regular": ["Merriweather-Regular", "sans-serif"],
      },

    },
  },
  plugins: [],
}

