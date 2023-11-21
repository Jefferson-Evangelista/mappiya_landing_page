/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  
  theme: {
    extend: {
      colors: {
        primary: "#ff0202",
        secondary: "#00f6ff",
        red: "#ff0202",
        darkRed: "#590000",
        dimYellow: "#FFDE59",
        dimWhite: "#EAEAEA",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        blackOpacity: "rgba(0, 0, 0, 0.31)",
        orange: "#FF8A00",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },

      maxWidth: {
        '1/2': '50%',
      }

    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    safelist: [
      'animate-[fade-in_1s_ease-in-out]', 
      'animate-[fade-in-down_1s_ease-in-out]'
    ],
  },
  plugins: [],
};