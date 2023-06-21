import React from 'react';
import PropTypes from 'prop-types';

export default function RocketList({ rocket = {} }) {
  return (
    <div className="rocket-list-item">
      <img className="rocket-image" src={rocket.flickr_images} alt={rocket.name} />
      <div className="rocket-info">
        <h2>{rocket.rocket_name}</h2>
        {rocket.description}
      </div>
    </div>
  );
}

RocketList.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
  }).isRequired,
};
