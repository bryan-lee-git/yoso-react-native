import React, { Component } from 'react';
import UserAuth from '../components/LandingUserAuth';
import UserHome from '../components/LandingHome';



class Home extends Component {
  static navigationOptions = {
    title: 'YOSO'
  }

  state = {
    loggedIn: true,
  }

  handleWhyNav = () => {
    this.props.navigation.navigate('Why')
  }

  handleSigninNav = () => {
    this.props.navigation.navigate('Signin')
  }

  handleLoginNav = () => {
    this.props.navigation.navigate('Login')
  }

  handleListNav = () => {
    this.props.navigation.navigate('Lists')
  }

  handlePantryNav = () => {
    this.props.navigation.navigate('Pantry')
  }

  handleWasteNav = () => {
    this.props.navigation.navigate('Waste')
  }

  handleRecipeNav = () => {
    this.props.navigation.navigate('Recipes')
  }

  handleAccountNav = () => {
    this.props.navigation.navigate('Account')
  }

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
       handleLoggedIn={this.handleLoggedIn}
       handleListNav={this.handleListNav}
       handlePantryNav={this.handlePantryNav}
       handleWasteNav={this.handleWasteNav}
       handleRecipeNav={this.handleRecipeNav}
       handleAccountNav={this.handleAccountNav}
       />
    );
  }
}

export default Home;

