import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
// import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
// import {
//   CompositeNavigationProp,
//   NavigatorScreenParams,
// } from '@react-navigation/native';

export interface AppNavigationProps<RouteName extends keyof AppRoutes> {
  navigation: StackNavigationProp<AppRoutes, RouteName>;
  route: RouteProp<AppRoutes, RouteName>;
}

export type AppRoutes = {
  Home: undefined;
};
