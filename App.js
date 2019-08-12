/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './src/scenes/Home';
import Detail from './src/scenes/Detail';


const RootStack = createStackNavigator(
  {
    home: Home,
    detail: Detail,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
