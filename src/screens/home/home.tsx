import React from 'react';
import GradientBackground from '@/components/gradient-background-wrapper-component';
import { View, Text, StyleSheet } from 'react-native';
import FocusTextInput from '@/components/focus-text-input';
import { colors, fontSizes } from '@/theme/theme';
import CustomButtonComponent from '@/components/custom-button-component';

const Home = () => {
  const [subject, setSubhect] = React.useState<string | undefined>(undefined);
  const [addCurentSubject, setAddCurrentSubject] = React.useState<string>('');

  const handlePress = () => {
    if (subject) {
      setAddCurrentSubject(subject);
    }
  };
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.hedingText}>Home Screen</Text>
        {!addCurentSubject ? (
          <View style={styles.inputContainer}>
            <FocusTextInput value={subject} onChangeText={setSubhect} />
            <CustomButtonComponent btnTitle="+" onPress={handlePress} />
          </View>
        ) : (
          <View>
            <Text style={styles.rndertext}>
              Now i going to render the Currecnt timer {addCurentSubject}
            </Text>
          </View>
        )}
      </View>
    </GradientBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 12,
    paddingHorizontal: 12,
    gap: 12,
  },
  hedingText: {
    color: colors.light,
    fontSize: fontSizes.xl,
    fontWeight: '700',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rndertext: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: '500',
  },
});

export default Home;
