// tailwind.config.js
module.exports = {
    content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#4F46E5",
          secondary: "#F472B6",
          accent: "#14B8A6",
          neutral: "#F3F4F6",
          "base-100": "#FFFFFF",
        },
      },
    },
    plugins: [ require('@tailwindcss/forms'), require('daisyui') ],
    daisyui: {
      themes: [{
        megablog: {
          primary: "#4F46E5", "primary-content": "#FFFFFF",
          secondary: "#F472B6","secondary-content":"#FFFFFF",
          accent: "#14B8A6","accent-content":"#FFFFFF",
          neutral: "#F3F4F6","base-100":"#FFFFFF",
        }
      }],
      defaultTheme: "megablog",
    },
  };