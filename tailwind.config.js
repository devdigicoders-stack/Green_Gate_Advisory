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
          DEFAULT: '#019935', // Exact Logo Fresh Green
          dark: '#017A2A',    // Medium Clean Green
          light: '#02B840',   // Bright Green Accent
        },
        'deep-green': {
          DEFAULT: '#019935',
          dark: '#017A2A',
          light: '#02B840',
        },
        gold: {
          DEFAULT: '#D4AF37', // Warm metallic gold accent
          dark: '#B59021',
          light: '#F3E5AB',
        },
        sage: {
          DEFAULT: '#F8FAF7', // Soft clean white/ivory
          light: '#FFFFFF',
          dark: '#EEF4ED',
        },
        charcoal: {
          DEFAULT: '#2C302E', // High readability dark slate
          muted: '#5A605D',   // Readable body
          light: '#9FA1A0',   // Exact Logo Gray
        },
        sand: {
          border: '#E2E8E1',
          surface: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Syne', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Outfit', 'Syne', '"Space Grotesk"', 'sans-serif'],
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
