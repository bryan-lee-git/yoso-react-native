import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Account extends Component {

  static navigationOptions = {
    title: 'My YOSO'
  }

  render() {
    return (
     <View>
       <Text>This is Account Page</Text>
     </View>
    );
  }
}

export default Account;