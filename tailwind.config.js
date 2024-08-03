import colors from 'tailwindcss/colors';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

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
          foreground: colors.white,
        },
        secondary: {
          DEFAULT: colors.gray[500],
          light: colors.gray[400],
          dark: colors.gray[600],
          foreground: colors.white,
        },
        danger: {
          DEFAULT: colors.red[600],
          light: colors.red[500],
          dark: colors.red[700],
          foreground: colors.white,
        },
        success: {
          DEFAULT: colors.green[500],
          light: colors.green[400],
          dark: colors.green[600],
          foreground: colors.white,
        },
        warning: {
          DEFAULT: colors.yellow[500],
          light: colors.yellow[400],
          dark: colors.yellow[600],
          foreground: colors.gray[900],
        },
        background: {
          DEFAULT: colors.white,
          dark: colors.gray[900],
        },
        text: {
          DEFAULT: colors.gray[900],
          dark: colors.gray[100],
        },
      },
      boxShadow: {
        button: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'button-hover': '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
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
  plugins: [forms, typography, aspectRatio],
};
