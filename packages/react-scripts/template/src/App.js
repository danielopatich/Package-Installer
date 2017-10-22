import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Dependencies } from './utils/Dependencies';

class App extends Component {
  displayDependecyOutput() {
    const results = new Set(); // ES6, initialize a Set when you hand it an Array.
    // ES6, initialize Data set with Map
    const packagesWithDeps = new Map(
      Dependencies.map(deps => deps.split(': '))
    );

    const loopOverPackagesWithDeps = (i, key) => {
      if (packagesWithDeps.get(key)) {
        loopOverPackagesWithDeps(i, packagesWithDeps.get(key));
        packagesWithDeps.set(key, null);
      }
      results.add(key);
    };

    packagesWithDeps.forEach(loopOverPackagesWithDeps);
    for (let result of results) {
      return `Dependency: ${result}`;
    }
    console.log(results);
    return <div>{[...results]}</div>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pluralsight Code Challenge</h1>
        </header>
        <div>{this.displayDependecyOutput(Dependencies)}</div>
      </div>
    );
  }
}

export default App;
