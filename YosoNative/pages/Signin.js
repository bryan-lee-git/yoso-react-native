import React, { Component } from 'react';
import { 
  ScrollView, 
  View, 
  StyleSheet,
} from 'react-native';
import { 
  Button,
  Text,
  Input,
} from 'react-native-elements';

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
      <ScrollView style={styles.container}>
        <View style={styles.alignContainer}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text h2>YOSO SIGN UP</Text>
            </View>
          </View>
            <Input
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              placeholder="First Name"
              textContentType="name"
              spellCheck= {false}
              onChangeText={this.handleFirstChange}
              value={this.state.firstName}
            />

            <Input
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              placeholder="Last Name"
              textContentType="name"
              spellCheck= {false}
              onChangeText={this.handleLastChange}
              value={this.state.lastName}
            />

            <Input
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              placeholder="Street"
              textContentType="streetAddressLine1"
              spellCheck= {false}
              onChangeText={this.handleStreetChange}
              value={this.state.street}
            />

            <Input
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              placeholder="City"
              textContentType="addressCity"
              spellCheck= {false}
              onChangeText={this.handleCityChange}
              value={this.state.city}
            />

            <Input
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              placeholder="State"
              textContentType="streetAddressLine1"
              spellCheck= {false}
              onChangeText={this.handleStateChange}
              value={this.state.homeState}
            />

            <Input
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              placeholder="Zip"
              keyboardType="number-pad"
              textContentType="postalCode"
              spellCheck= {false}
              onChangeText={this.handleZipChange}
              value={this.state.zip}
            />

            <Input
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              spellCheck= {false}
              onChangeText={this.handleEmailChange}
              value={this.state.email}
            />

            <Input
              inputContainerStyle={styles.input}
              leftIcon={{ type: 'font-awesome', name: 'pencil' }}
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
              spellCheck= {false}
              onChangeText={this.handlePswrdChange}
              value={this.state.password}
            />
          <Button 
            buttonStyle={styles.button}
            title="Sign up" 
            onPress={this.handleSignUp}
            key='signUp'
          />  
        </View>                 
      </ScrollView>
    );
  }
}

export default Signin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
  },
  alignContainer: {    
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    margin: 5,
  },
  button: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderRadius: 10,
    borderStyle: 'solid',
    padding: 5,
    marginTop: 15,
    padding:10,
  }, 
})