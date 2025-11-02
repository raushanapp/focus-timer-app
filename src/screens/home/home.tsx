import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hedingText}>Home Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  hedingText: {
    color: '#ffffff',
  },
});

export default Home;
