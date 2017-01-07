import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyD24bKdgAwkzmiRE5EqSk69dU385crbS7w',
      authDomain: 'manager-cf894.firebaseapp.com',
      databaseURL: 'https://manager-cf894.firebaseio.com',
      storageBucket: 'manager-cf894.appspot.com',
      messagingSenderId: '568410982736'
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
