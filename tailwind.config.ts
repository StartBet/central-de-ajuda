import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        midnight: '#270644',
        'midnight-2': '#3f136d',
        'midnight-3': '#51238c',
        gold: '#7fdd24',
        'gold-soft': '#b8ef7d',
        felt: '#4cd84c',
        sand: '#f5f0de',
        grape: '#6b3bb7',
        ink: '#f8fafc',
      },
      boxShadow: {
        panel: '0 18px 60px rgba(0, 0, 0, 0.26)',
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Base Neue"', '"Arial Narrow"', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
