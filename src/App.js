import React, { Component } from 'react';
import logo from './logo.svg';
import SignUp from './components/sign/singup';
import {Provider} from 'react-redux';

import store from './data/create';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SignUp />
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>
              <div>
                  <App />
              </div>
          </div>
      </Provider>
    )
  }
}

export default App;
