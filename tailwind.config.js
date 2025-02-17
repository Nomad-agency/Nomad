/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter Tight', 'serif'],
      lastik: ['Lastik', 'serif'],
    },
    screens: {
      xxs: '320px',
      xs: '350px',
      sm: '568px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#999',
        secondary: '#202123',
      },
      backgroundImage: {
        'bg-1': "url('/images/bg-1.jpg')",
        'bg-2': "url('/images/bg-2.jpg')",
        'bg-3': "url('/images/bg-3.jpg')",
        'bg-4': "url('/images/bg-4.jpg')",
        'bg-5': "url('/images/bg-5.jpg')",
        'bg-6': "url('/images/bg-6.jpg')",
        'bg-7': "url('/images/bg-7.jpg')",
        'bg-8': "url('/images/bg-8.png')",
        'bg-9': "url('/images/bg-9.png')",
        'bg-10': "url('/images/bg-10.png')",
        'bg-11': "url('/images/bg-11.png')",
        'bg-12': "url('/images/bg-12.png')",
        'bg-13': "url('/images/bg-13.png')",
        'bg-14': "url('/images/bg-14.png')",
        'bg-15': "url('/images/bg-15.png')",
      },
    },
  },
  plugins: [],
};
