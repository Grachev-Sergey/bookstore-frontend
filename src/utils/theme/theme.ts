import type { DefaultTheme } from 'styled-components';

export const baseTheme: DefaultTheme = {
  colors: {
    darkBlue: '#344966',
    dark: '#0D1821',
    light: '#F0F4EF',
    green: '#BFCC94',
    lightGray: '#D6D8E7',
    darkGray: '#B9BAC4',
    white: '#FFFFFF',
    darkGreen: '#8D9F4F',
    error: '#ff0000',
  },

  borderRadius: '16px',

  fontWeight: {
    bold: '700',
    medium: '500',
    regular: '400',
  },

  fontSize: {
    title: '40px',
    bigPrice: '36px',
    titleTablet: '32px',
    autor: '24px',
    regular: '20px',
    filter: '18px',
    small: '16px',
    imputTitle: '14px',
    commentDescription: '12px',
    bookStatusMobile: '10px',
  },

  lineHight: {
    title: '60px',
    bigPrice: '54px',
    titleTablet: '48px',
    author: '36px',
    regularBig: '30px',
    regular: '28px',
    regularSmall: '24px',
    small: '21px',
    commentDescription: '18px',
    bookStatus: '10px',
  },

  media: {
    tablet: '(max-width: 1279px)',
    medium: '(max-width: 834px)',
    small: '(max-width: 650px)',
    mobile: '(max-width: 450px)',
  },
};
