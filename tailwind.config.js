// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#a64d79',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
       }),
       borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary': '#a64d79',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
       }),
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }