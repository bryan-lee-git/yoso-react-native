import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

class Signin extends Component {
  
  static navigationOptions = {
    title: 'YOSO Sign up'
  }

  state = {
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    homeState: '',
    zip: 0,
    email: '',
    password: '',
  }

  handleFirstChange = val => {
    this.setState({
      firstName: val
    });
  };

  handleLastChange = val => {
    this.setState({
      lastName: val
    });
  };

  handleStreetChange = val => {
    this.setState({
      street: val
    });
  };

  handleCityChange = val => {
    this.setState({
      city: val
    });
  };

  handleStateChange = val => {
    this.setState({
      homeState: val
    });
  };

  handleZipChange = val => {
    this.setState({
      zip: val
    });
  };

  handleEmailChange = val => {
    this.setState({
      email: val
    });
  };

  handlePswrdChange = val => {
    this.setState({
      password: val
    });
  };

  handleSignUp= () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.title}>YOSO SIGN UP</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.textField}
              placeholder="First Name"
              textContentType="name"
              spellCheck= {false}
              onChangeText={this.handleFirstChange}
              value={this.state.firstName}
            />
          </View>

          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.textField}
              placeholder="Last Name"
              textContentType="name"
              spellCheck= {false}
              onChangeText={this.handleLastChange}
              value={this.state.lastName}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.textField}
              placeholder="Street"
              textContentType="streetAddressLine1"
              spellCheck= {false}
              onChangeText={this.handleStreetChange}
              value={this.state.street}
            />
          </View>

          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.textField}
              placeholder="City"
              textContentType="addressCity"
              spellCheck= {false}
              onChangeText={this.handleCityChange}
              value={this.state.city}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.textField}
              placeholder="State"
              textContentType="streetAddressLine1"
              spellCheck= {false}
              onChangeText={this.handleStateChange}
              value={this.state.homeState}
            />
          </View>

          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.textField}
              placeholder="Zip"
              keyboardType="number-pad"
              textContentType="postalCode"
              spellCheck= {false}
              onChangeText={this.handleZipChange}
              value={this.state.zip}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.textField}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              spellCheck= {false}
              onChangeText={this.handleEmailChange}
              value={this.state.email}
            />
          </View>

          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.textField}
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
              spellCheck= {false}
              onChangeText={this.handlePswrdChange}
              value={this.state.password}
            />
          </View>
        </View>
        <Button 
          color="#33cc33" 
          title="Sign up" 
          onPress={this.handleSignUp}
          key='signUp'
        />               
      </View>
    );
  }
}

export default Signin;

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
  textField: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
    alignItems: 'center',
  }
})