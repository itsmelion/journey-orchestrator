export const bgColors = ['#000000', '#3C3C3B', '#878787', '#DADADA'];

export enum shades {
  darkContrast = '#000000',
  dark = '#3C3C3B',
  mid = '#878787',
  light = '#DADADA',
  lightContrast = '#ffffff',
};

export const colors: Record<TVariants, string> = {
  yellow: '#FECB04',
  green: '#98CB03',
  blue: '#2196E2',
  purple: '#AE36FF',
  red: '#FF0400',
  grey: '#8585AA',
} as const;

export const variants: Record<TVariants, TVariants> = {
  yellow: 'yellow',
  green: 'green',
  blue: 'blue',
  purple: 'purple',
  red: 'red',
  grey: 'grey',
};

export type TVariants = 'yellow' | 'green' | 'blue' | 'purple' | 'red' | 'grey';
