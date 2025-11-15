import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors, fontSizes } from '@/theme/theme';

const FocusTextInput: React.FC<TextInputProps> = ({ value, onChangeText }) => {
  return (
    <View style={styles.conatiner}>
      <TextInput
        style={styles.textInputs}
        placeholder="What would like to focus on"
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
    padding: 16,
    color: colors.white,
    borderRadius: 12,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.grey1,
    fontSize: fontSizes.md,
    fontFamily: 'System',
    fontWeight: '500',
  },
});

export default FocusTextInput;
