import React from 'react';
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { theme } from '@/theme/theme';

type NameStyles<T> = { [p in keyof T]: ViewStyle | TextStyle | ImageStyle };

const useStyles = <T extends NameStyles<T>>(
  factory: (t: typeof theme) => T,
) => {
  // memoize styles  so they  don't re calculate unless theme changes
  const styles = React.useMemo(
    () => StyleSheet.create(factory(theme)),
    [factory],
  );
  return { styles, theme };
};

export default useStyles;
