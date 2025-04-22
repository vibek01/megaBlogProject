// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#334155',
        'primary-dark': '#1E293B',
        secondary: '#06B6D4',
        'secondary-dark': '#075985',
        accent: '#F59E0B',
        'accent-dark': '#B45309',
        neutral: '#E2E8F0',
        'neutral-content': '#334155',
        'base-100': '#F1F5F9',
        'base-content': '#1E293B',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        300: '300ms',
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
          primary: '#334155',
          'primary-content': '#FFFFFF',
          secondary: '#06B6D4',
          'secondary-content': '#FFFFFF',
          accent: '#F59E0B',
          'accent-content': '#FFFFFF',
          neutral: '#E2E8F0',
          'neutral-content': '#334155',
          'base-100': '#F1F5F9',
          'base-content': '#1E293B',
        },
      },
    ],
    defaultTheme: 'megablog',
  },
};