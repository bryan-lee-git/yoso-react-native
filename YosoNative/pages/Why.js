import React, { Component } from 'react';
import {ScrollView, StyleSheet, View, } from 'react-native';
import { Card, Text, Icon, } from 'react-native-elements';



class Why extends Component {
  static navigationOptions = {
    title: 'Why YOSO'
  }

  render() {
    return (
      <ScrollView 
        contentContainerstyle={styles.scrollContainer} 
        style={styles.container}>
          <Card 
            title='What?' 
            titleStyle={styles.cardTitle} 
            wrapperStyle={styles.cardContainer}>         
              <Text style={styles.text}>YOSO is a smart grocery shopping assistant that...</Text>
              <Text style={styles.text}>Helps you quickly create, store, and share your grocery lists and sort by store.</Text>
              <Text style={styles.text}>Learns and proactively adds items to your list based upon when you last shopped and how long items last.</Text>
              <Text style={styles.text}>Keeps track of expiration dates to help you use the food you already have and reduce waste.</Text>
          </Card>

        <Card 
          title='Why?' 
          titleStyle={styles.cardTitle} 
          wrapperStyle={styles.cardContainer}>         
            <Text style={styles.text}>Ever had a craving, gone to your fridge to fix yourself a nice meal; and then realized that the ingredients you needed had exprired?</Text>
            <Text style={styles.text}>Ever forgot to check if you needed toilet paper and then had to go back to the store?</Text>
            <Text style={styles.text}>Ever Felt like an absolute dummy for having to throw away food you'd forgotten to use before it expired?</Text>
            <Text style={styles.text}>We have, That's why!</Text>
        </Card>

        <Card 
          title='Panda Warriors Dev Group, thats who!' 
          titleStyle={styles.cardTitle}  
          wrapperStyle={styles.cardContainer}>
            <View style={styles.row}>         
              <Icon name="logo-octocat" type="ionicon" />
              <Text style={styles.text}>  Bryan Lee        </Text>
           
              <Icon name="logo-octocat" type="ionicon" />
              <Text style={styles.text}>  Jim Schlader</Text>
            </View>

            <View style={styles.row}>
              <Icon name="logo-octocat" type="ionicon" />
              <Text style={styles.text}>  Eric Bishop     </Text>

              <Icon name="logo-octocat" type="ionicon" />
              <Text style={styles.text}>  Bronson Bird</Text>
            </View>  
        </Card>
      </ScrollView>
    );
  }
}

export default Why;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green'
  },
  scrollContainer: {    
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    margin: 15,
  },
  cardTitle: {
    fontSize: 30,
    color: 'green',    
  },
  text: {
    color: 'green',
    marginTop: 5,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
  },
})