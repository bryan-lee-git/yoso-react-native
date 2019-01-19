import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, TextInput} from 'react-native';

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
              color="#33cc33" 
              title="New Lists" 
              onPress={this.handleNewListNav}
              key='newList'
            />
          </View>
          <View style={styles.btnColumn}>
            <Button 
              color="#33cc33" 
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
  fieldContainer: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    marginRight: 5,
    marginLeft: 5,
    flex: 1,
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  teaser: {
    fontSize: 20,
  }

});