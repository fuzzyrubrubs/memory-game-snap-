import React, { Component } from 'react';
import './App.css';

import MemoryGame from './Containers/MemoryGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MemoryGame />
      </div>
    );
  }
}

export default App;
