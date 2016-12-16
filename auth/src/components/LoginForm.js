import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state={email:'', password:'', error: ''};
  onButtonPress(){
    const {email, password} = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(()=>{
      firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(()=>{

        })
    })
  }

  render(){
    return (
      <Card>
        <CardSection>
          <Input
          label='Email'
          placeholder='user@gmail.com'
          value={this.state.email} 
          onChangeText={email => this.setState({email})}
          />
        </CardSection>

        <CardSection>
        <Input
          secureTextEntry
          //This is the same as secureTextEntry={true}
          label='Password'
          placeholder='password'
          value={this.state.password} 
          onChangeText={password => this.setState({password})}
          />
        </CardSection>

        <CardSection onPress={this.onButtonPress.bind(this)}>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
      )
  }
}

export default LoginForm;
