import {breakpoints} from './breakpoints';
import {spacing} from './spacing';

export type Colors = {
  bg: {
    screen: string;
    surface: string;
    primary: string;
  };
  fg: {
    neutralOnScreen: string;
    neutralOnSurface: string;
    neutralOnPrimary: string;
  };
};

export type Theme = {
  colors: Colors;
  spacing: typeof spacing;
  breakpoints: typeof breakpoints;
};

export const lightTheme: Theme = {
  colors: {
    bg: {
      primary: '#AB1F42',
      screen: '#EDE1E4',
      surface: '#F8F1F3',
    },
    fg: {
      neutralOnPrimary: '#F8F1F3',
      neutralOnScreen: '#0a0a0a',
      neutralOnSurface: '#0a0a0a',
    },
  },
  spacing,
  breakpoints,
} as const;

export const darkTheme: Theme = {
  colors: {
    bg: {
      primary: '#AB1F42',
      screen: '#201f1f',
      surface: '#0a0a0a',
    },
    fg: {
      neutralOnPrimary: '#F8F1F3',
      neutralOnScreen: '#F8F1F3',
      neutralOnSurface: '#F8F1F3',
    },
  },
  spacing,
  breakpoints,
} as const;
