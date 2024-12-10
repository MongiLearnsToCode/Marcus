/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stage-purple': '#6B46C1',
        'spotlight-gold': '#F6AD55',
        'drama-red': '#E53E3E',
        'curtain-burgundy': '#9B2C2C',
        'accent-teal': '#319795',
        'night-blue': '#1A365D',
        'cream': '#FFF5F5',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'spotlight': 'spotlight 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        spotlight: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-spotlight': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}