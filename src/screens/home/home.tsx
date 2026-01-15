import React from 'react';
import GradientBackground from '@/components/gradient-background-wrapper-component';
import { View, Text, StyleSheet } from 'react-native';
import FocusTextInput from '@/components/focus-text-input';
import { colors, fontSizes, spacing } from '@/theme/theme';
import RoundedButtonComponent from '@/components/rounded-button-component';

const Home = () => {
  const [subject, setSubhect] = React.useState<string | null>(null);
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
            <FocusTextInput value={subject ?? ''} onChangeText={setSubhect} />
            <View style={styles.button}>
              <RoundedButtonComponent
                btnTitle="+"
                onPress={handlePress}
                size={50}
                style={styles.button}
              />
            </View>
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
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  hedingText: {
    color: colors.light,
    fontSize: fontSizes.xl,
    fontWeight: '700',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    padding: 20,
  },
  button: {
    justifyContent: 'center',
  },
  rndertext: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: '500',
  },
});

export default Home;
