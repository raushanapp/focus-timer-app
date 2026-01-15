import React from 'react';
import ApplicationNavigator from '@/navigator/application';
import { Platform, StatusBar, useColorScheme, View } from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('isDarkMode', isDarkMode);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ApplicationNavigator />
    </View>
  );
};

export default App;
