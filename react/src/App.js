import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Planet from './Planet'
import { Route } from 'react-router-dom'
import PrivateRoute from './util/auth'
class App extends Component {
  render() {
    return (
      <div>

        <Route path="/login" component={Login} />

        <PrivateRoute exact path="/" store={this.props.store} component={Planet} />

      </div>
    );
  }
}

export default App;
