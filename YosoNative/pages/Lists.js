import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import { Button } from 'react-native-elements';

class Lists extends Component {

  static navigationOptions = {
    title: 'Lists'
  }

  handleNewListNav = () => {
    this.props.navigation.navigate('NewList')
  }

  handleMyListNav = () => {
    this.props.navigation.navigate('MyLists')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.btnColumn}>
            <Button 
              buttonStyle={styles.button} 
              title="New Lists" 
              onPress={this.handleNewListNav}
              key='newList'
            />
          </View>
          <View style={styles.btnColumn}>
            <Button 
              buttonStyle={styles.button} 
              title="My List" 
              onPress={this.handleMyListNav}
              key='myList'
            />
          </View> 
        </View>
      </View>
    );
  };
};

export default Lists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  btnColumn: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  button: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderRadius: 10,
    borderStyle: 'solid',
    padding: 5,
    marginTop: 25,
  }, 

});