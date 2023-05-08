import PropTypes from 'prop-types';
import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, className } = this.props;
    return (
      <div className="planetNames">
        <div data-testid="planet-card" className={ className }>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
        <p data-testid="planet-name">
          {planetName}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default PlanetCard;
