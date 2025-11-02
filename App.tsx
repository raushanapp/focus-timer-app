import React from 'react';
import ApplicationNavigator from '@/navigator/application';
import { StatusBar, useColorScheme, View } from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'light';
  console.log('isDarkMode', isDarkMode);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
    flex: 1,
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
