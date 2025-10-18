export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#1E3A8A',
        },
        purple: {
          400: '#A78BFA',
          500: '#7C3AED',
          900: '#4C1D95',
        },
        orange: {
          400: '#FB923C',
          500: '#F59E0B',
          600: '#EA580C',
          900: '#7C2D12',
        },
        green: {
          400: '#4ADE80',
          500: '#10B981',
          600: '#059669',
          900: '#064E3B',
        }
      }
    },
  },
  plugins: [],
}