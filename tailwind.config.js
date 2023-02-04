/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        darkBlue: 'hsl(213, 96%, 18%)',
        purplishBlue: 'hsl(243, 100%, 62%)',
        pastelBlue: 'hsl(228, 100%, 84%)',
        strawberryRed: 'hsl(354, 84%, 57%)',
        coolGray: 'hsl(231, 11%, 63%)',
        lightGray: 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
      },
      backgroundImage: {
        'sidebar-mobile': "url('/public/images/bg-sidebar-mobile.svg')",
        'sidebar-desktop': "url('/public/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
