import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        primary: {
          DEFAULT: colors.blue[500],
          light: colors.blue[400],
          dark: colors.blue[600],
        },
        secondary: {
          DEFAULT: colors.gray[500],
          light: colors.gray[400],
          dark: colors.gray[600],
        },
        danger: {
          DEFAULT: colors.red[600],
          light: colors.red[500],
          dark: colors.red[700],
        },
        success: {
          DEFAULT: colors.green[500],
          light: colors.green[400],
          dark: colors.green[600],
        },
        warning: {
          DEFAULT: colors.yellow[500],
          light: colors.yellow[400],
          dark: colors.yellow[600],
        },
      },
      boxShadow: {
        button: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/typography',
    '@tailwindcss/aspect-ratio',
  ],
};
