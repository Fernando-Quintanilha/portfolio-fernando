/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#E3EAEE',
        ink: '#0E1B24',
        'ink-soft': '#4E5D67',
        signal: '#FF4F1A',
        'signal-text': '#B83A10',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        display: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      screens: {
        // Prévia flutuante dos projetos: só com mouse e tela larga (tablet sem mouse vê a imagem na linha).
        float: { raw: '(hover: hover) and (min-width: 768px)' },
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
    },
  },
  plugins: [],
};
