import React, { Component } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  View 
} from 'react-native';
import { 
  Button,
  Text,
  Input,
} from 'react-native-elements';

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
    return (
      <ScrollView style={styles.container}>
        <View style={styles.alignContainer}>
          <Text h2>YOSO Log in</Text>

          <Input 
            key="email"
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
            key="password"
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
            title="Login"
            key='login'
            onPress={this.handleGoHome}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Login;

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
});

          