/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#020617',
          900: '#030712',
          850: '#070c18',
          800: '#0b1220',
          700: '#111c30',
          600: '#1e293b',
        },
        neon: {
          blue: '#00f0ff',
          cyan: '#00e5ff',
          celestial: '#00b4d8',
          sky: '#38bdf8',
          electric: '#0ea5e9',
          deep: '#0284c7',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Poppins', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px -2px rgba(0, 240, 255, 0.4)',
        'neon-hover': '0 0 30px 2px rgba(0, 240, 255, 0.65)',
        'neon-celestial': '0 0 25px -2px rgba(2, 132, 199, 0.5)',
        'neon-card': '0 0 25px -5px rgba(0, 229, 255, 0.15)',
        'neon-card-hover': '0 0 35px 2px rgba(0, 240, 255, 0.35)',
        'glow-pill': '0 0 15px rgba(0, 240, 255, 0.5)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        }
      }
    },
  },
  plugins: [],
}
