import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import listAPI from '../utlilities/listAPI';

class NewList extends Component {
  static navigationOptions = {
    title: 'New List'
  }

  state = {
    newListName: '',
  }

  handleNewList = val => {
    this.setState({
      newListName: val
    });
  };

  createList = (e, id) => {
    console.log(this.state.newListName)
    e.preventDefault();
    listAPI.createList(id, {
      name: this.state.newListName
    }).then((res) => {
      this.props.navigation.navigate('MyLists')
    }).catch(err => {
      console.log(err);
    })
  };


  handleNewListSubmit = (e) => {
    this.createList(e, 2)
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.title}>NEW LIST</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.textField}
              placeholder="New List"
              textContentType="name"
              spellCheck= {false}
              onChangeText={this.handleNewList}
              value={this.state.firstName}
            />
          </View>
        </View>
        <Button 
          color="#33cc33" 
          title="Create New List" 
          onPress={this.handleNewListSubmit}
          key='submitNewList'
        />        
     </View>
    );
  }
}

export default NewList;

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
  textField: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
    alignItems: 'center',
  }
})