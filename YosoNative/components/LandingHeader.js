import React from 'react';
import {View, Text, StyleSheet, } from 'react-native';

const LandingHeader = () => {
  return (
    <>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>YOSO</Text>
        </View>
      </View>  
    
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.teaser}>Welcome to YOSO Native App Alpha v4</Text>
        </View>
      </View> 
    </>
  );
};

export default LandingHeader;

const styles = StyleSheet.create({
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