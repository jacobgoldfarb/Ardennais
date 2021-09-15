module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Helvetica', 'Arial', 'sans-serif'],
      header: ['Blinker', 'monospace']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#FFF500',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      primary: '#FFF500',
     }),
    boxShadow: {
      bold: '0 1px 2px 0 rgba(0, 0, 0, 0.30)',
      black: '4px 4px 0 8px rgba(0, 0, 0, 1)',
      black2: '2px 2px 0 4px rgba(0, 0, 0, 1)',
    },
    backgroundImage: {
      // digitalPattern: "url('_next/static/image/assets/digital_background.220bc24db3d47c85e436dd4bbd578573.jpg')",
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
