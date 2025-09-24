/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a',
        'glass': 'rgba(15, 15, 15, 0.7)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'neon-blue': '#00eeff',
        'neon-purple': '#bd34fe',
        'neon-pink': '#fe34b4',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(0, 238, 255, 0.5)',
        'neon-lg': '0 0 25px rgba(0, 238, 255, 0.7)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}