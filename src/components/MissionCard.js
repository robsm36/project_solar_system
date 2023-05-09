import PropTypes from 'prop-types';
import React from 'react';
import destinyPng from '../images/destinyVector.png';
import locationPng from '../images/locationVector.png';
import datePng from '../images/Vector.png';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination, link } = this.props;

    return (
      <a href={ link } className="link">
        <div data-testid="mission-card" className="missionCard">
          <h1 data-testid="mission-name">{name}</h1>
          <hr />
          <span>
            <img src={ datePng } alt="" />
            <p data-testid="mission-year">{year}</p>
          </span>
          <span>
            <img src={ locationPng } alt="" />
            <p data-testid="mission-country">{country}</p>
          </span>
          <span>
            <img src={ destinyPng } alt="" />
            <p data-testid="mission-destination">{destination}</p>
          </span>
        </div>
      </a>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MissionCard;
