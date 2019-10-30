import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ img, name, species }) => (
  <div>
    <img src={img} />
    <h2>Name: {name}</h2>
    <h3>Species: {species}</h3>
  </div>
);

export default Character;

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};
