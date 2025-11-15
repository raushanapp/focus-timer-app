import React, { JSX } from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Dirs } from 'react-native-file-access';
import { CacheManager } from '@georstat/react-native-image-cache';
import { AppRoutes } from './navigation';
import Home from '@/screens/home';

CacheManager.config = {
  baseDir: `${Dirs.CacheDir}/images_cache/`,
  blurRadius: 15,
  cacheLimit: 0,
  maxRetries: 3 /* optional, if not provided defaults to 0 */,
  retryDelay: 3000 /* in milliseconds, optional, if not provided defaults to 0 */,
  sourceAnimationDuration: 500,
  thumbnailAnimationDuration: 500,
};

const Stack = createStackNavigator<AppRoutes>();

const Screens = [{ Home }];
type Screen = keyof (typeof Screens)[0];

const ApplicationNavigator = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <NavigationContainer theme={DarkTheme}>
            <SafeAreaView style={styles.safe}>
              <StatusBar animated={true} barStyle={'light-content'} />
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                  ...TransitionPresets.SlideFromRightIOS,
                  gestureEnabled: true,
                }}
              >
                {Screens.map(item => {
                  const [name, component] = Object.entries(item)[0] as [
                    Screen,
                    () => JSX.Element,
                  ];
                  return (
                    <Stack.Screen
                      key={name}
                      name={name}
                      component={component}
                    />
                  );
                })}
              </Stack.Navigator>
            </SafeAreaView>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safe: { flex: 1 },
});

export default ApplicationNavigator;
