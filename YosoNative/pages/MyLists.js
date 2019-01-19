import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, FlatList, TextInput} from 'react-native';
import ListComponent from '../components/ListComponent';
import listAPI from '../utlilities/listAPI';

// will need to pass user info in through context

class MyLists extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      userLists: [],
    }

    this.getLists = this.getLists.bind(this)
  }

  static navigationOptions = {
    title: 'My Lists'
  }

  getLists = id => {
    listAPI.getLists(2).then(res => { //change 2 back to id once context is setup
      console.log(`From getlists at listconduit, here's the user's lists: `, res);
      this.setState({
        userLists: res.data,
        // id: this.props.user.id,
        // first: this.props.user.first
      });
    }).catch(err => {
      console.log(err);
    })
  };

  componentDidMount = () => {
    this.getLists();
  }

  handleEditListNav = () => {
    this.props.navigation.navigate('EditList')
  }

  handleNewListNav = () => {
    this.props.navigation.navigate('NewList')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <FlatList
            key="flatlist"
            style={styles.list}
            data={this.state.userLists}
            renderItem={({item}) => <ListComponent handleEditListNav={this.handleEditListNav} list={item} />}
            // keyExtractor may need to dig into a different part of the item obj.
            keyExtractor={item => item.id}
          />
        </View>      
        <Button
          color="#33cc33"
          title="New List"
          onPress={this.handleNewListNav}
          key='newList'
        />  
      </View>
    );
  }
}

export default MyLists;

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