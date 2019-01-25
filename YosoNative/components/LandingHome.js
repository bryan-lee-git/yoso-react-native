import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { Button } from 'react-native-elements';
import LandingHeader from '../components/LandingHeader.js';

const UserHome = (props) => {  

  return (
    <View style={styles.container}>
      <LandingHeader />

      <View style={styles.row}>
        <View style={styles.btnColumn}>
          <Button 
            buttonStyle={styles.button} 
            title="Lists" 
            onPress={props.handleListNav}
            key='lists'
          />
        </View>
        <View style={styles.btnColumn}>
        <Button 
            buttonStyle={styles.button} 
            title="Account" 
            onPress={props.handleAccountNav}
            key='account'
          />
          </View>
        <View style={styles.btnColumn}>
        <Button
            buttonStyle={styles.button} 
            title="Log Out" 
            onPress={props.handleLogOut}
            key='logout'
          />
        </View>         
      </View>
    </View>
  );  
};

export default UserHome;

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