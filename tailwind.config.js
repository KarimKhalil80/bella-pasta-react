/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#1c1410',
        espresso2: '#26190f',
        ink: '#2a201a',
        cream: '#f7efe0',
        cream2: '#efe2cb',
        paper: '#fbf6ec',
        tomato: '#c0392b',
        tomatoBright: '#e0492f',
        basil: '#6f8a3c',
        basilDark: '#5d7733',
        gold: '#dd9a4e',
        goldSoft: '#e9c389',
        muted: '#8a7a6a',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      maxWidth: { site: '1180px' },
      boxShadow: { warm: '0 18px 50px -22px rgba(28,20,16,.55)' },
    },
  },
  plugins: [],
}
