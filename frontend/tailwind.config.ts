import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        IntegralCFBold: ['IntegralCF-Bold', 'sans-serif'],
        SatoshiRegular: ['Satoshi-Regular', 'sans-serif'],
        SatoshiMedium: ['Satoshi-Medium,', 'sans-serif'],
        SatoshiBold: ['Satoshi-Bold', 'sans-serif'],
      },
      colors: {
        accent: '#ff3333',
        yellowCustom: '#ffc733',
        greyCustom: {
          100: '#f0f0f0',
          200: '#f0eded',
          300: '#666666',
          400: '#F2F0F1',
        },
        greenCustom: '#03ab30',
      },
      screens: {
        xs: '390px',
        xsPlus: '460px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xs: '100%',
        },
      },
    },
  },
} satisfies Config;
