import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Signin from '../pages/Signin';

const UserAuth = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>YOSO</Text>
        </View>
      </View>  
    
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.teaser}>Welcome to YOSO Native App Alpha v3</Text>
        </View>
      </View> 
              
      <View style={styles.row}>
        <View style={styles.btnColumn}>
          <Button 
            color="#33cc33" 
            title="YOSO?" 
            onPress={props.handleWhyNav}
            key='yoso'
          />
        </View>
        <View style={styles.btnColumn}>
          <Button 
            color="#33cc33" 
            title="Sign Up" 
            onPress={props.handleSigninNav}
            key='signup'
          />
          </View>
        <View style={styles.btnColumn}>
          <Button
            color="#33cc33" 
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
    backgroundColor: '#fff',
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  teaser: {
    fontSize: 20,
  }

});