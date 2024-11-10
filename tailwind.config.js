/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGreen: '#dcfbfa',
        customIndigo: '#646cff',
      },
    },
  },
  plugins: [],
}

