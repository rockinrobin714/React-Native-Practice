import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyArZz_b7Kk20phHfWGBR_Z6LCqmfZlMYxI',
      authDomain: 'manager-fceb7.firebaseapp.com',
      databaseURL: 'https://manager-fceb7.firebaseio.com',
      storageBucket: 'manager-fceb7.appspot.com',
      messagingSenderId: '872858978873'
      };

  firebase.initializeApp(config);
  }

  render() {  
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
