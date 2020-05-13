import React, { Component } from 'react';
import './App.css';

import Bedroom1 from './components/Bedroom/Bedroom1';
import Kitchen from './components/Kitchen/Kitchen';
import FullBath from './components/Bath/FullBath';
import Bedroom2 from './components/Bedroom/Bedroom2';
import LivingRoom from './components/LivingRoom/LivingRoom';
import HalfBath from './components/Bath/HalfBath';
import Bedroom3 from './components/Bedroom/Bedroom3';

class App extends Component {
  render() {
    return (
      <div className="App component">
        {/* <header className="App-header">
          Floor Plan
        </header> */}
        <div className="component gridComponent">
          <Bedroom1 />
          <Kitchen />
          <FullBath />
          <Bedroom2 />
          <LivingRoom />
          <HalfBath />
          <Bedroom3 />
        </div>
      </div>
    );
  }
}

export default App;
