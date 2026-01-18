import React from 'react';
import ApplicationNavigator from '@/navigator/application';
import { StatusBar, useColorScheme } from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(isDarkMode);

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
      />
      <ApplicationNavigator />
    </>
  );
};

export default App;
