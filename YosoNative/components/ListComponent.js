import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const ListComponent = (props) => {
 
  return (
    <View style={styles.card}>      
      <View style={styles.counterContainer}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{props.list.name}</Text>
        </View>
        
        <View style={styles.counter}>
          <Button
            color="#33cc33"
            title="Edit"
            onPress={props.handleEditListNav}
            key='editList'
          />
          <View style={{margin: 10}} />
          <Button
            color="#33cc33"
            title="Delete"
            onPress={this.handleDeleteList}
            key='deleteList'
          />          
        </View>
      </View>
    </View>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    margin: 10,
    marginTop: 20,
    marginBottom: 5,
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  date: {
    fontWeight: '200',
    fontSize: 15,
    color: '#bdbdbd',
    width: '30%',
    textAlign: 'right',
  },
  title: {
    fontSize: 15,
    fontWeight: '300',
    marginLeft: 7,
    textAlign: 'left',
  },
  counterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  counter: {
    width: '25%',
    flex: 1,
  },
  counterText: {
    fontSize: 40,
    textAlign: 'center',
  },
  counterLabel: {
    fontSize: 13,
    fontWeight: '100',
    color: '#a3a3a3',
    textAlign: 'center',
    paddingTop: 0,
  },
});