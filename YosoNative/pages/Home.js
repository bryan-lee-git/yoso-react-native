import React, { Component } from 'react';
import UserAuth from '../components/LandingUserAuth';
import UserHome from '../components/LandingHome';
import axios from 'axios';
// dont forget to export UserContext when ready
// export const UserContext = React.createContext({});
const CryptoJS = require("crypto-js");
const rootDomain = require('../utlilities/rootDomain.js');

const yosoAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout (cb, 100);
  },
  signOut() {
    this.isAuthenticated = false;
  }
};

class Home extends Component {
  
  static navigationOptions = {
    title: 'YOSO'
  }

  state = {
    loggedIn: true,
  }

  handleSignUp = (data, cb) => {
    const { first, last, email, password, street, city, state, zip} = data;
    const ciphertext = CryptoJS.AES.encrypt(password, 'yosoAuthKeyMofo').toString();
    axios
      .post(`${rootDomain}/login`, {
        first,
        last,
        email,
        password: ciphertext,
        street,
        city,
        state,
        zip
      })
      .then(res => {
        if (res.data) {
          yosoAuth.authenticate();
          this.setState({
            first,
            last,
            email,
            password: ciphertext,
            state,
            street,
            city,
            zip,
            id: res.data.id,
            loggedIn: true
          });
          if (cb) cb();        
        } else console.log("Could not sign up! Please try again.")
      })
      .catch(err => {
        console.log("There was an error signing you in. Please try again.");
        console.log(err);
      });
  };

  handleSignIn = (data, cb) => {
    const { email, password} = data;
    const ciphertext = CryptoJS.AES.encrypt(password, 'yosoAuthKeyMofo').toString();
    axios
      .get(`${rootDomain}/login`, { email })
      .then(response => {
        if (response.data) {
          console.log(
            `here's the response from the db fro the user data: ${response.data}`
          );
          const hash = res.data.password;
          if (res.data.password === ciphertext) {
            
              yosoAuth.authenticate();
              this.setState({
                first: response.data.first,
                last: response.data.last,
                email: response.data.email,
                password: hash,
                state: response.data.state,
                street: response.data.street,
                city: response.data.city,
                zip: response.data.zip,
                id: response.data.id,
                loggedIn: true
              });
              if (cb) cb();
            } else console.log("Incorrect Log-In Attemp. Please Try Again.");
         
        } else console.log("Could not sign in! Please try again.");
      })
      .catch(err => {
        console.log("There was an error with the signup server.");
        console.log(err);
      });
  };

  handleAccountUpdate = (data, cb) => {
    const { first, last, email, password, state, street, city, zip } = data;
    const hash = bcrypt.hashSync(password, salt);
    axios
      .put(`${rootDomain}/login/${email}`, {
        first,
        last,
        email,
        password: hash,
        street,
        city,
        state,
        zip
      })
      .then(response => {
        if (response.data) {
          console.log(response.data);
          this.setState({
            first,
            last,
            email,
            password: hash,
            street,
            city,
            state,
            zip,
            loggedIn: true
          });
          if (cb) cb();
        } else console.log("Could not handle account changes! Please try again.");
      })
      .catch(err => {
        console.log("There was and error changing your account. Please try again.");
        console.log(err);
      });
  };

  handleLogOut = () => {
    this.setState({ loggedIn: false });
    // yosoAuth.signOut();
    // if (cb) cb();
    // this.props.navigation.navigate('Home')
  };

  handleWhyNav = () => {
    this.props.navigation.navigate('Why')
  };

  handleSigninNav = () => {
    this.props.navigation.navigate('Signin')
  };

  handleLoginNav = () => {
    this.props.navigation.navigate('Login')
  };

  handleListNav = () => {
    this.props.navigation.navigate('Lists')
  };

  handlePantryNav = () => {
    this.props.navigation.navigate('Pantry')
  };

  handleWasteNav = () => {
    this.props.navigation.navigate('Waste')
  };

  handleRecipeNav = () => {
    this.props.navigation.navigate('Recipes')
  };

  handleAccountNav = () => {
    this.props.navigation.navigate('Account')
  };

  handleLoggedIn = log => {
    if(log){
      this.setState({
        loggedIn: true
      });
    } else {
      this.setState({
        loggedIn: false
      });
    };
  };

  render() {
    return (
      !this.state.loggedIn 
      ? <UserAuth
       loggedIn={this.loggedIn} 
       handleLoggedIn={this.handleLoggedIn}
       handleSigninNav={this.handleSigninNav}
       handleLoginNav={this.handleLoginNav}
       handleWhyNav={this.handleWhyNav}
       /> 
       : <UserHome 
       loggedIn={this.loggedIn}
       handleLogOut={this.handleLogOut}
       handleListNav={this.handleListNav}
       handleAccountNav={this.handleAccountNav}
       />
    );
  }
}

export default Home;

