import React from 'react';
import { Text } from 'react-native';
import UtilsMethods from '@/utils/index';
import useStyles from '@/hooks/theme/useStyes';

interface CountDownComponentProps {
  minutes: number;
  isPaused: boolean;
  onProgress?: (progress: number) => void;
  onEnd?: () => void;
}

const CountDownComponent: React.FC<CountDownComponentProps> = ({
  minutes = 0.1,
  isPaused,
  onProgress,
  onEnd,
}) => {
  const interval = React.useRef<number | null>(null);
  const [millis, setMillis] = React.useState<number | null>(null);

  const countDown = React.useCallback(() => {
    setMillis((time: number | null) => {
      if (time === null) return time;
      if (time === 0) {
        if (interval.current) clearInterval(interval.current);
        onEnd?.();
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  }, [onEnd]);

  React.useEffect(() => {
    setMillis(UtilsMethods.minutesToMs(minutes));
  }, [minutes]);

  React.useEffect(() => {
    onProgress?.(millis! / UtilsMethods.minutesToMs(minutes));
  }, [millis, minutes, onProgress]);

  React.useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current!);
  }, [countDown, isPaused]);

  const minute = Math.floor((millis! / 1000 / 60) % 60);
  const seconds = Math.floor((millis! / 1000) % 60);

  const { styles } = useStyles(t => {
    return {
      textCountDown: {
        ...t.typography.h1,
      },
    };
  });

  return (
    <Text style={styles.textCountDown}>
      {' '}
      {UtilsMethods.formateTime(minute)}:{UtilsMethods.formateTime(seconds)}
    </Text>
  );
};
export default CountDownComponent;
