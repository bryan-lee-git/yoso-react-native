import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, TextInput} from 'react-native';

class EditList extends Component {

  static navigationOptions = {
    title: 'Edit'
  }

  state ={
    newItem: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.fieldContainer}>
            <TextInput
              key="email"
              style={styles.textField}
              placeholder="New Item"
              spellCheck= {false}
              onChangeText={this.handleNewItem}
              value={this.state.newItem}
              />
          </View>
        </View>
      </View>
    );
  }
}

export default EditList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
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