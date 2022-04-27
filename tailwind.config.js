module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '100': '25rem',
      },
      boxShadow:{
        '3xl':'0 10px 20px rgba(0, 0, 0, 0.2)',
      },
      colors:{
        
      },
      fontSize: {
        'xxxs': '.50rem',
        'xxs': '.65rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      backgroundImage: {
        'discount': "url('/assets/Icons/discount.svg')",
      }
    },
  },
  plugins: [],
}