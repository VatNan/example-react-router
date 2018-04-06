import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Setting from './Setting';

class App extends Component {
  render() {
    return (
      <div style={{ margin: '0px', padding: '0px' }}>
        <div style={{ width: '100%', backgroundColor: '#00ffd0' }} >
          <h2>Example react-router v.4</h2>
        </div>
        <BrowserRouter>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={About} path="/about" />
            <Route component={Setting} path="/setting" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
