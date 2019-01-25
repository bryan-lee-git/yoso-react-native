import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Button } from 'react-native-elements';
import LandingHeader from '../components/LandingHeader.js';
 

const UserAuth = (props) => {

  return (
    <View style={styles.container}>
      <LandingHeader />
      
      <View style={styles.row}>
        <View style={styles.btnColumn}>
          <Button 
            buttonStyle={styles.button} 
            title="YOSO?" 
            onPress={props.handleWhyNav}
            key='yoso'
          />
        </View>
        <View style={styles.btnColumn}>
          <Button 
            buttonStyle={styles.button} 
            title="Sign Up" 
            onPress={props.handleSigninNav}
            key='signup'
          />
          </View>
        <View style={styles.btnColumn}>
          <Button
            buttonStyle={styles.button} 
            title="Login" 
            onPress={props.handleLoginNav}
            key='login'
          />
        </View>         
      </View>
    </View>
  );  
}

export default UserAuth;

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