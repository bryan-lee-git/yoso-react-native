/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './pages/Home';
import Why from './pages/Why';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Lists from './pages/Lists';
import Account from './pages/Account';
import Recipes from './pages/Recipes';
import Pantry from './pages/Pantry';
import Waste from './pages/Waste';
import NewList from './pages/NewList';
import MyLists from './pages/MyLists';
import EditList from './pages/EditList';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderRadius: 10,
    borderStyle: 'solid',
    marginRight: 25,
    padding: 5,
  },
});

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: {screen: Home},
  Why: {screen: Why},
  Signin: {screen: Signin },
  Login: {screen: Login},
  Lists: {screen: Lists},
  Account: {screen: Account},
  Pantry: {screen: Pantry},
  Recipes: {screen: Recipes},
  Waste: {screen: Waste},
  NewList: {screen: NewList},
  MyLists: {screen: MyLists},
  EditList: {screen: EditList},
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#33cc33'
    },
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title='Home'
        buttonStyle={styles.button}
      /> 
    )
  }
});

const AppContainer = createAppContainer (AppStackNavigator);

