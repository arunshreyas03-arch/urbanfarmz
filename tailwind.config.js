/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        farm: {
          darkest: '#050f09',
          dark: '#0a1d12',
          forest: '#11291b',
          moss: '#1c3d2a',
          emerald: '#23593b',
          leaf: '#34a853',
          bright: '#22c55e',
          lime: '#84cc16',
          neon: '#00ff88',
          sand: '#f8f5ee',
          cream: '#faf8f2',
          earth: '#4a3b32',
          clay: '#c86d51',
          gold: '#e0a96d'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 35px -5px rgba(34, 197, 94, 0.3)',
        'glow-lg': '0 0 50px -5px rgba(0, 255, 136, 0.35)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' }
        }
      }
    },
  },
  plugins: [],
}

