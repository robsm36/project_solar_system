import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    document.body.classList.add('background');
    return (
      <div className="flex">
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
