import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PantryComponents from '../components/PantryComponents'

class Pantry extends Component {

  static navigationOptions = {
    title: 'My Pantry'
  }

  state = {
    pantryLists: [
      one ={
        title: 'carrots'
      },
      two = {
        title: 'beans'
      }
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <FlatList
            key="flatlist"
            style={styles.list}
            data={this.state.pantryLists}
            renderItem={({item}) => <PantryComponents pantry={item} />}
            // keyExtractor may need to dig into a different part of the item obj.
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

export default Pantry;