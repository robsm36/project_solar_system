import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planetsBox">
        <span>
          <Title headline="Planetas" />
        </span>
        <div className="planetsContainer">
          {Planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
              className={ planet.className }
            />
          ))}
        </div>
      </div>
    );
  }
}
export default SolarSystem;
