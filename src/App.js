import React, { Component } from 'react';
import './App.css';

import Bedroom1 from './components/Bedroom/Bedroom1';
import Kitchen from './components/Kitchen/Kitchen';
import Bath from './components/Bath/Bath';
import LivingRoom from './components/LivingRoom/LivingRoom';
import Bedroom3 from './components/Bedroom/Bedroom3';
import Bedroom2 from './components/Bedroom/Bedroom2';

class App extends Component {
  render() {
    return (
      <div className="App component">
        {/* <header className="App-header">
          Floor Plan
        </header> */}
        <div className="component">
          <Bedroom1 />
          <Kitchen />
          <Bath />
          <Bedroom2 />
          <LivingRoom />
          <Bath />
          <Bedroom3 />
        </div>
      </div>
    );
  }
}

export default App;
