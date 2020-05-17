import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider as AuthProvider } from './src/context/AuthContext';

import Signup from './src/screens/Signup';

const switchNavigator = createSwitchNavigator({
  loginFlow : createStackNavigator({
    Signup
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    // <App ref={(navigator) => setNavigator(navigator)} />
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}