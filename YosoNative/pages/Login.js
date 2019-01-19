import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import ActionButton from 'react-native-action-button';

class Login extends Component {
  state = {
    email: '',
    password: '', 
  }

  static navigationOptions = {
    title: 'YOSO Login'
  }

  handleGoHome = () => {
    this.props.navigation.navigate('Home')
  }

  handleMainNav = () => {
    // this.props.navigation.navigate('Main')
  }

  handleEmailChange = val => {
    this.setState({
      email: val
    });
    console.log(this.state.email)
  };

  handlePswrdChange = val => {
    this.setState({
      password: val
    });
    console.log(this.state.password)
  };

  render() {
    return [
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>YOSO LOGIN</Text>
        </View>
        
        <View style={styles.fieldContainer}>
          <TextInput
            key="email"
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
        <Button 
          color="#33cc33" 
          title="Login" 
          onPress={this.handleMainNav}
          key='enterLogin'
        /> 
      </View>,
      <ActionButton 
        key="fab"
        onPress={this.handleGoHome}
        buttonColor='blue'
        style={{marginBottom: 250}}
      />
    ];
  }
}

export default Login;

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    marginRight: 10,
    marginLeft: 10,
  },
  textField: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10,
  }
})