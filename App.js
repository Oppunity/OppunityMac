/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import Homescreen from './src/screens/Homescreen';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator ( { 
  Home: Homescreen,
},
{
  initialRoute: 'Home',
  defaultNavigationOptions: {
      headerStyle: {
      backgroundColor: '#fff'
  },
  headerTintColor: '#2E36FF'
}
}
)

const AppContainer = createAppContainer(RootStack)

class App extends Component {
  render() {
      return (
          <AppContainer/> 
      )
  };
}

export default App; 
