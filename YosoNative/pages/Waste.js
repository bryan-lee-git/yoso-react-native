import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Waste extends Component {

  static navigationOptions = {
    title: 'My Waste'
  }

  render() {
    return (
     <View>
       <Text>This is Waste Page</Text>
     </View>
    );
  }
}

export default Waste;