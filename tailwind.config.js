// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:           "#334155",   // slate-700
        "primary-dark":    "#1E293B",   // slate-800
        secondary:         "#06B6D4",   // sky-500
        "secondary-dark":  "#075985",   // sky-700
        accent:            "#F59E0B",   // amber-500
        "accent-dark":     "#B45309",   // amber-700
        neutral:           "#E2E8F0",   // slate-200
        "neutral-content": "#334155",   // slate-700
        "base-100":        "#F1F5F9",   // slate-100
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        megablog: {
          primary:             "#334155",
          "primary-content":   "#FFFFFF",
          secondary:           "#06B6D4",
          "secondary-content": "#FFFFFF",
          accent:              "#F59E0B",
          "accent-content":    "#FFFFFF",
          neutral:             "#E2E8F0",
          "neutral-content":   "#334155",
          "base-100":          "#F1F5F9",
          "base-content":      "#1E293B", // 👈 Add this line to make text in inputs visible
        },
      },
    ],
    defaultTheme: "megablog",
  },
};