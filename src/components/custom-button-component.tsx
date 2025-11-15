import React from 'react';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { Text, StyleSheet } from 'react-native';
import { colors } from '@/theme/theme';

interface CustomButtonProps {
  btnTitle: string;
  onPress: () => void;
}

const CustomButtonComponent: React.FC<CustomButtonProps> = ({
  btnTitle,
  onPress,
}) => {
  return (
    <RNBounceable onPress={onPress} style={styles.conatiner}>
      <Text style={styles.btn}>{btnTitle}</Text>
    </RNBounceable>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // flexGrow: 1,
    backgroundColor: colors.third,
    height: 60,
    width: 60,
    borderRadius: '50%',
    borderWidth: 1,
    flexDirection: 'row',
  },
  btn: {
    color: colors.light,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CustomButtonComponent;
