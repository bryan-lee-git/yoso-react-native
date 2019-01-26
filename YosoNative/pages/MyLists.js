import React, { Component } from 'react';
import {
  StyleSheet, 
  View, 
  ScrollView,
} from 'react-native';
import {
  Button, 
  ListItem,
  Text,
  Input,
} from 'react-native-elements';
import Modal from "react-native-modal";
import listAPI from '../utlilities/listAPI';
import itemAPI from '../utlilities/ItemAPI';

// will need to pass user info in through context

class MyLists extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      userLists: [],
      itemList: [],
      displayAllLists: true,
      isModalVisible: false,
    }

    this.getLists = this.getLists.bind(this)
  }

  static navigationOptions = {
    title: 'My Lists'
  }

   handleNewListNav = () => {
    this.props.navigation.navigate('NewList')
  };

  componentDidMount = () => {
    this.getLists();
  };

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  handlebackToMyList = () => {
    this.setState({
      displayAllLists: true,
    });
  };

  handleItemName = val => {
    this.setState({
      itemName: val
    });
  };

  handleUnitSize = val => {
    this.setState({
      unitSize: val
    });
  };

  handleMeasurement = val => {
    this.setState({
      measurement: val
    });
  };

  handleQuanity = val => {
    this.setState({
      quantity: val
    });
  };

  handleNotes = val => {
    this.setState({
      notes: val
    });
  };

  getLists = id => {
    listAPI.getLists(1).then(res => { //change 2 back to id once context is setup
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
    this._toggleModal();
  };

  getItems = id => {
    itemAPI.getItems(id).then(res => {
      this.setState({ itemList: res.data });
    }).catch(err => {
      console.log(err);
    });
  };

  handlePopulateItems = (e, id, name) => {
    e.preventDefault();
    this.setState({
      displayAllLists: false,
      listName: name,
      listID: id,
    });
    this.getItems(id);
  };

  handleNewItem = e => {
    e.preventDefault();
    const newItem = {
      name: this.state.itemName,
      unitSize: this.state.unitSize,
      measurement: this.state.measurement,
      quantity: this.state.quantity,
      notes: this.state.notes,
      listId: this.state.listID,
    };
    itemAPI.createItem(newItem).then(res => {
      this.getItems(this.state.listID);
    }).catch(err => {
      console.log(err);
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
                onLongPress={ this._toggleModal }
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
          <Modal 
            isVisible={this.state.isModalVisible}
            backdropColor='grey'
            backdropOpacity={.40}
          >
            <View style={styles.modalContainer}>
              <Button
                title='Delete List?'
                onPress={this._toggleModal}
                buttonStyle={styles.modalButton}
              />
              <Button 
                title='Hide Modal'
                onPress={this._toggleModal}
                buttonStyle={styles.modalButton}
              />
            </View>
          </Modal>
        </ScrollView>
      ) : (
        <ScrollView style={styles.container}>
          <View style={styles.alignContainer}>
            <Text h2>{this.state.listName}</Text>
            <Input 
              placeholder='Add Item' 
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              onChangeText={this.handleItemName}
              value={this.state.itemName}
            />
            <Input 
              placeholder='Quantity' 
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              onChangeText={this.handleQuanity}
              value={this.state.quantity}
            />
            <Input 
              placeholder='Unit Size' 
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              onChangeText={this.handleUnitSize}
              value={this.state.unitSize}
            />
             <Input 
              placeholder='Unit Type (measurement)' 
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              onChangeText={this.handleMeasurement}
              value={this.state.measurement}
            />
             <Input 
              placeholder='Note' 
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              onChangeText={this.handleNotes}
              value={this.state.notes}
            />
            <Button 
              title='Create'
              onPress={e => 
                this.handleNewItem(
                  e,
                )}
              buttonStyle={styles.button}
            />
          </View>
          {
            this.state.itemList.map((item, i) => (
              <ListItem
                containerStyle={styles.listItem}
                key={i}
                title={`${item.quantity} ${item.measurement} of ${item.name}`}
                onPress={this.handleDeleteList}
                leftIcon={{ name: 'food-apple', type: 'material-community' }}
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
  modalContainer: {
    flex: 1,
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
  button: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderRadius: 10,
    borderStyle: 'solid',
    padding: 5,
  },
  modalButton: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderRadius: 10,
    borderStyle: 'solid',
    padding: 5,
    margin: 15,
  },  
});