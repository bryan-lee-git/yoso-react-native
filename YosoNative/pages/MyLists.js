import React, { Component } from 'react';
import {
  StyleSheet, 
  View, 
  ScrollView,
  Button, 
  FlatList, 
  TextInput,
} from 'react-native';
import { 
  ListItem,
  Text,
  Input,
} from 'react-native-elements';
import listAPI from '../utlilities/listAPI';
import itemAPI from '../utlilities/ItemAPI';

// will need to pass user info in through context

class MyLists extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      userLists: [],
      itemList: [],
      listName: '',
      displayAllLists: true,
    }

    this.getLists = this.getLists.bind(this)
  }

  static navigationOptions = {
    title: 'My Lists'
  }

  componentDidMount = () => {
    this.getLists();
  }

  getLists = id => {
    listAPI.getLists(2).then(res => { //change 2 back to id once context is setup
      this.setState({
        userLists: res.data,
        // id: this.props.user.id,
        // first: this.props.user.first
      });
    }).catch(err => {
      console.log(err);
    })
  };

  handleDeleteList = ( e, userId, listId, ) => {
    e.preventDefault();
    listAPI.deleteList(userId, listId).then((res) => {
      this.getLists(userId)
    }).catch(err => {
      console.log(err);
    })
  };

  handleEditListNav = () => {
    this.setState({
      displayAllLists: false,
    });
  };

  handlebackToMyList = () => {
    this.setState({
      displayAllLists: true,
    });
  };

  handleNewListNav = () => {
    this.props.navigation.navigate('NewList')
  }

  handlePopulateItems = (e, id, name) => {
    e.preventDefault();
    this.setState({
      displayAllLists: false,
      listName: name,
    });
    itemAPI.getItems(id).then(res => {
      //console.log(`From getlists at userLists, here's the user's items: `, res);
      this.setState({ itemList: res.data });
    });
  };

  render() {
    return (
      this.state.displayAllLists ? (
        <ScrollView style={styles.container}>
          {
            this.state.userLists.map((item, i) => (
              <ListItem
                containerStyle={styles.listItem}
                key={i}
                title={item.name}
                onPress={this.handleDeleteList}
                leftIcon={{ name: 'list', type: 'font-awesome' }}
                chevron={true}
                onPress={e => 
                  this.handlePopulateItems(
                    e,
                    item.id,
                    item.name,
                  )}
              />
            ))
          }
        </ScrollView>
      ) : (
        <ScrollView style={styles.container}>
          <View style={styles.alignContainer}>
            <Text h2>{this.state.listName}</Text>
            <Input 
              placeholder='Add Item' 
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
            />
            <Input 
              placeholder='Quantity' 
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
            />
            <Input 
              placeholder='Unit Size' 
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
            />
          </View>
        </ScrollView>
      )
    );
  }
}

export default MyLists;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green'
  },
  alignContainer: {    
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
  listItem: {
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: 'black',
    margin: 5,
    backgroundColor: '#33cc33'
  },
  input: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    margin: 5,
  },
});