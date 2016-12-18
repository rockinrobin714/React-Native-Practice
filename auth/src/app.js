import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state= { loggedIn: null }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDxf0FnDuwKA2loucxUc0yoZ11oiaE2ikU",
      authDomain: "auth-b1d01.firebaseapp.com",
      databaseURL: "https://auth-b1d01.firebaseio.com",
      storageBucket: "auth-b1d01.appspot.com",
      messagingSenderId: "650973154753"
    })

    firebase.auth().onAuthStateChanged((user)=>{
      if (user){
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }
  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
        );
      case false:
        return <LoginForm /> ; 
      default:
        return <Spinner size='large'/>
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
      )
  }
}

export default App;