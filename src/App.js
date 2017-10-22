import React, { Component } from 'react';
import logo from './logo.svg';
import SignUp from './components/sign/singup';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';

import store from './data/create';


@connect(
  state => ({
      loginState: state.sign.loginState
  }),
  {

  }
)
class App extends Component {
  // componentWillReceiveProps() {
    
  // }
  render() {
    return (
      <div className="App">
          <SignUp /> {this.props.loginState}
      </div>
    );
  }
}

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>
              <App />
          </div>
      </Provider>
    )
  }
}

