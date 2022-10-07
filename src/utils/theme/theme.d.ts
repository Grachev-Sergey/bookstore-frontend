import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      darkBlue: string;
      dark: string;
      light: string;
      green: string;
      lightGray: string;
      darkGray: string;
      white: string;
      darkGreen: string;
      error: string;
    };

    borderRadius: string;

    fontWeight: {
      regular: string;
      medium: string;
      bold: string;
    };

    fontSize: {
      title: string;
      bigPrice: string;
      titleTablet: string;
      autor: string;
      regular: string;
      filter: string;
      small: string;
      imputTitle: string;
      commentDescription: string;
    };

    lineHight: {
      title: string;
      bigPrice: string;
      titleTablet: string;
      author: string;
      regularBig: string;
      regular: string;
      regularSmall: string;
      small: string;
      commentDescription: string;
    };

    media: {
      tablet: string;
      medium: string;
      small: string;
      mobile: string;
    };
  }
}
