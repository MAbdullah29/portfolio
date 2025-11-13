/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: "0 0 10px rgba(255, 255, 255, 0.5)",
      },
      keyframes: {
        spinFast: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        spinSlow: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
        bounceIcon: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10%)' } },
        pulseIcon: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.6 } },
        wiggleIcon: { '0%,100%': { transform: 'rotate(-5deg)' }, '50%': { transform: 'rotate(5deg)' } },
        rotateSlow: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        shakeIcon: { '0%,100%': { transform: 'translateX(0)' }, '25%': { transform: 'translateX(-5%)' }, '75%': { transform: 'translateX(5%)' } },
        floatIcon: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8%)' } },
      },
      animation: {
        'spin-fast': 'spinFast 1.5s linear infinite',
        'spin-slow': 'spinSlow 10s linear infinite',
        float: 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1.5s',
        'bounce-icon': 'bounceIcon 1s ease-in-out infinite',
        'pulse-icon': 'pulseIcon 1.5s ease-in-out infinite',
        'wiggle-icon': 'wiggleIcon 0.8s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 8s linear infinite',
        'shake-icon': 'shakeIcon 0.5s ease-in-out infinite',
        'float-icon': 'floatIcon 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
