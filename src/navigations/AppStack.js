import {Platform} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';

import SplashScreen from '_scenes/SplashScreen';

const animateTransition =
  Platform.Version < 28
    ? TransitionPresets.ModalSlideFromBottomIOS
    : TransitionPresets.RevealFromBottomAndroid;

const AppStack = createStackNavigator(
  {
    SplashScreen: SplashScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
    defaultNavigationOptions: {
      ...animateTransition,
    },
  },
);

const AppNavigator = createSwitchNavigator(
  {
    App: AppStack,
  },
  {
    initialRouteName: 'App',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
