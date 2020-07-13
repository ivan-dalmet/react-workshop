import { theme } from '@chakra-ui/core';

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      50: '#ffe6f8',
      100: '#f5bee0',
      200: '#ea95c6',
      300: '#e06cab',
      400: '#d6438e',
      500: '#bc297f',
      600: '#931e6b',
      700: '#6b1453',
      800: '#420a37',
      900: '#1c0119',
    },
  },
};
