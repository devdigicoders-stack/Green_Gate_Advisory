/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0E6649', // Fresh balanced emerald green (less dark)
          dark: '#0B4D36',    // Rich dignified forest green (softened, not pitch black)
          light: '#188761',   // Vibrant eco-green accent
        },
        'deep-green': {
          DEFAULT: '#0E6649',
          dark: '#0B4D36',
          light: '#188761',
        },
        gold: {
          DEFAULT: '#D2AD67',
          dark: '#B8924B',
          light: '#E6C88A',
        },
        sage: {
          DEFAULT: '#F5F7F4', // Crisp clean background
          light: '#FAFBF9',
          dark: '#E7ECE5',
        },
        charcoal: {
          DEFAULT: '#363939', // Exact Logo Dark Slate/Graphite text color
          muted: '#525756',   // Balanced secondary text
          light: '#727977',
        },
        sand: {
          border: '#DCE4DB',
          surface: '#F8FAF7',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(18, 63, 50, 0.05), 0 1px 2px rgba(18, 63, 50, 0.03)',
        'premium': '0 10px 30px -5px rgba(18, 63, 50, 0.08), 0 4px 6px -2px rgba(18, 63, 50, 0.03)',
        'elevated': '0 20px 40px -10px rgba(18, 63, 50, 0.12), 0 8px 12px -4px rgba(18, 63, 50, 0.04)',
      },
    },
  },
  plugins: [],
}
