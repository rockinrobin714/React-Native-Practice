import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state={text:''};

  render(){
    return (
      <Card>
        <CardSection>
          <Input
          label='Email'
          placeholder='user@gmail.com'
          value={this.state.text} 
          onChangeText={text => this.setState({text})}
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
      )
  }
}

export default LoginForm;
