import React from 'react';
import { View, Text } from 'react-native';
import GradientBackground from '@/components/gradient-background-wrapper-component';
import FocusTextInput from '@/components/focus-text-input';
import RoundedButtonComponent from '@/components/rounded-button-component';
import useStyles from '@/hooks/theme/useStyes';

const Home = () => {
  const [subject, setSubject] = React.useState<string | null>(null);
  const [addCurentSubject, setAddCurrentSubject] = React.useState<string>('');

  const { styles } = useStyles(t => ({
    container: {
      ...t.layout.screen,
      paddingTop: t.spacing.xl,
      gap: t.spacing.l,
    },
    headingText: {
      ...(t.typography.h1 as any),
      color: t.colors.text,
      letterSpacing: -0.5,
    },
    glassInputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: t.colors.glass,
      borderRadius: t.borderRadii.xl,
      borderWidth: 1,
      borderColor: t.colors.glassBorder,
      paddingHorizontal: t.spacing.m,
      paddingVertical: t.spacing.s,
      gap: t.spacing.s,
    },
    renderText: {
      ...t.typography.body,
      color: t.colors.text,
      textAlign: 'center',
      marginTop: t.spacing.xl,
      backgroundColor: t.colors.glass,
      padding: t.spacing.m,
      borderRadius: t.borderRadii.m,
    },
  })) as unknown as { styles: Record<string, any> };

  const handlePress = () => {
    if (subject) {
      setAddCurrentSubject(subject);
    }
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.headingText}>Focus on Time</Text>

        {!addCurentSubject ? (
          <View style={styles.glassInputWrapper}>
            <FocusTextInput value={subject ?? ''} onChangeText={setSubject} />
            <RoundedButtonComponent
              btnTitle="+"
              onPress={handlePress}
              size={45}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.renderText}>
              Currently focusing on: {addCurentSubject}
            </Text>
          </View>
        )}
      </View>
    </GradientBackground>
  );
};

export default Home;
