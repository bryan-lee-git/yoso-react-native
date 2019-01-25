import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  Button, 
  ListItem,
  Text,
  Input,
} from 'react-native-elements';
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
    <ScrollView style={styles.container}>
      <View style={styles.alignContainer}>
        <Text h2>New List</Text>
        <Input 
          placeholder='New List' 
          inputContainerStyle={styles.input}
          leftIcon={{ type: 'font-awesome', name: 'pencil' }}
          onChangeText={this.handleNewList}
          value={this.state.newListName}
        />
        <Button 
          title='Create'
          onPress={e => 
            this.handleNewListSubmit(
              e,
            )}
          buttonStyle={styles.button}
        />
      </View>
    </ScrollView>
    );
  }
}

export default NewList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green'
  },
  alignContainer: {    
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderRadius: 10,
    borderStyle: 'solid',
    padding: 5,
  }, 
})