import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider as AuthProvider } from './src/context/AuthContext';

import Signup from './src/screens/Signup';
import Signin from './src/screens/Signin';
import TrackList from './src/screens/TrackList';

import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  loginFlow : createStackNavigator({
    Signup,
    Signin
  }),
  mainFlow : createStackNavigator({
    TrackList,
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator)} />
    </AuthProvider>
  )
}