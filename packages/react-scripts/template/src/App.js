import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Dependencies } from './utils/Dependencies';

class App extends Component {
  displayDependecyOutput() {
    return 'Dependency Injection';
  }

  render() {
    console.log(Dependencies);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pluralsight Code Challenge</h1>
        </header>
        <div>{this.displayDependecyOutput()}</div>
      </div>
    );
  }
}

export default App;
