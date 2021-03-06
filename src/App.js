import logo from './logo.svg';
import './App.css';
import ListComponent from './ListComponent';
import React from 'react';

class App extends React.Component {
  render() {
      return (
          <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
              <ListComponent />
          </div>
      );
  }
}

export default App;
