import React from 'react';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import { colors } from '@/theme/theme';

interface CustomButtonProps {
  btnTitle: string;
  size?: number;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const RoundedButtonComponent: React.FC<CustomButtonProps> = ({
  btnTitle,
  onPress,
  size = 120,
  style,
  textStyle,
}) => {
  return (
    <RNBounceable onPress={onPress} style={[styles(size).radius, style]}>
      <Text style={[styles(size).text, textStyle]}>{btnTitle}</Text>
    </RNBounceable>
  );
};

const styles = (size: number) =>
  StyleSheet.create({
    radius: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: size / 2,
      width: size,
      height: size,
      borderWidth: 2,
      borderColor: colors.white,
    },
    text: {
      color: colors.white,
      fontSize: size / 3,
    },
  });

export default RoundedButtonComponent;
