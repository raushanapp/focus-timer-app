import React from 'react';

import { View, Text } from 'react-native';
import GradientBackground from '@/components/gradient-background-wrapper-component';

import useStyles from '@/hooks/theme/useStyes';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { AppNavigationProps } from '@/navigator/navigation';

const Timer = ({ navigation }: AppNavigationProps<'Timer'>) => {
  const { styles } = useStyles(t => ({
    container: {
      ...t.layout.screen,
      paddingTop: t.spacing.xl,
      gap: t.spacing.l,
    },
    headerContainer: {
      ...t.layout.spaceBetween,
    },
    backView: {
      ...t.layout.center,
      borderRadius: t.borderRadii.l,
      paddingHorizontal: t.spacing.s,
      paddingVertical: t.spacing.xs,
      borderWidth: 1,
      borderColor: t.colors.glassBorder,
    },
    backText: {
      ...t.typography.body,
      color: t.colors.text,
      fontWeight: '600',
      textAlign: 'center',
      fontSize: 28,
      transform: [{ rotate: '180deg' }],
    },
    headingText: {
      ...t.typography.h1,
      color: t.colors.text,
      fontSize: 28,
    },
  }));

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <RNBounceable
            style={styles.backView}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>{'→'}</Text>
          </RNBounceable>
          <Text style={styles.headingText}>Count your Time</Text>
        </View>
      </View>
    </GradientBackground>
  );
};
export default Timer;
