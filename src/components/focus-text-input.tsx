import React from 'react';
import { View, StyleSheet, TextInputProps } from 'react-native';
import { colors, fontSizes } from '@/theme/theme';
import { TextInput } from 'react-native-paper';

const FocusTextInput: React.FC<TextInputProps> = ({ value, onChangeText }) => {
  return (
    <View style={styles.conatiner}>
      <TextInput
        style={styles.textInputs}
        label="What would like to focus on"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
  },
  textInputs: {
    color: colors.light,
    borderRadius: 12,
    backgroundColor: 'transparent',
    fontSize: fontSizes.md,
    fontFamily: 'System',
    fontWeight: '700',
  },
});

export default FocusTextInput;
