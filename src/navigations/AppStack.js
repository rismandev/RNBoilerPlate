import {Platform} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
// Screens
import SplashScreen from '_scenes/SplashScreen';

// Animation Transition from react navigation
const animateTransition =
  Platform.Version < 28
    ? TransitionPresets.ModalSlideFromBottomIOS
    : TransitionPresets.RevealFromBottomAndroid;

// Create Stack Routes
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

// Switch Navigator Stack
const AppNavigator = createSwitchNavigator(
  {
    App: AppStack,
  },
  {
    initialRouteName: 'App',
    headerMode: 'none',
  },
);

// Export Navigator Stack
export default createAppContainer(AppNavigator);
