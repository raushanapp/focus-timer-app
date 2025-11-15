import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export const createStyles = <T extends NamedStyles<T>>(
  styles: T | NamedStyles<T>,
) => StyleSheet.create(styles);

// Common shared utilities
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

export const fontSizes = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 30,
  xxxl: 36,
};

export const colors = {
  primary: '#667eea',
  third: '#4E61D3',
  secondary: '#764ba2',
  dark: '#1a1a2e',
  light: '#ffffff',
  text: '#1b1a18ff',
  error: '#ff6b6b',
  linear1: '#010415ff',
  linear2: '#000',
  txtInputBg: '#EEEEEE',
  btnBg: '#473472',
  grey1: '#dedcdbff',
  white: '#fff',
};

export const typography = {
  h1: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
  } as TextStyle,
  h2: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
  } as TextStyle,
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  } as TextStyle,
  small: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  } as TextStyle,
};

export const flexUtils = {
  center: { justifyContent: 'center', alignItems: 'center' } as ViewStyle,
  between: {
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,
  around: { justifyContent: 'space-around', alignItems: 'center' } as ViewStyle,
};
