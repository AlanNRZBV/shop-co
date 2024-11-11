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
        },
        greenCustom: '#03ab30',
      },
      screens: {
        xs: '',
      },
    },
  },
} satisfies Config;
