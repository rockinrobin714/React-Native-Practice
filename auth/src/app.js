import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDxf0FnDuwKA2loucxUc0yoZ11oiaE2ikU",
      authDomain: "auth-b1d01.firebaseapp.com",
      databaseURL: "https://auth-b1d01.firebaseio.com",
      storageBucket: "auth-b1d01.appspot.com",
      messagingSenderId: "650973154753"
    })

    firebase.auth().onAuthStateChange((user)=>{

    })
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
      )
  }
}

export default App;