import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const UserHome = (props) => {  

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
            title="Lists" 
            onPress={props.handleListNav}
            key='lists'
          />
        </View>
        <View style={styles.btnColumn}>
          <Button 
            color="#33cc33" 
            title="Pantry" 
            onPress={props.handlePantryNav}
            key='pantry'
          />
          </View>
        <View style={styles.btnColumn}>
          <Button
            color="#33cc33" 
            title="Waste" 
            onPress={props.handleWasteNav}
            key='waste'
          />
        </View>         
      </View>

      <View style={styles.row}>
        <View style={styles.btnColumn}>
          <Button 
            color="#33cc33" 
            title="Recipes" 
            onPress={props.handleRecipeNav}
            key='recipes'
          />
        </View>
        <View style={styles.btnColumn}>
          <Button 
            color="#33cc33" 
            title="Account" 
            onPress={props.handleAccountNav}
            key='account'
          />
          </View>
        <View style={styles.btnColumn}>
          <Button
            color="#33cc33" 
            title="Log Out" 
            onPress={props.handleLogOutNav}
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