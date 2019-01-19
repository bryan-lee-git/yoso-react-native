import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Recipes extends Component {

  static navigationOptions = {
    title: 'YOSO Recipes'
  }

  render() {
    return (
      <View>
        <Text>This is Recipes Page</Text>
      </View>
    );
  }
}

export default Recipes;