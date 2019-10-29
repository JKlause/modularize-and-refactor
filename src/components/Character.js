import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ img, name, species }) => (
  <header>
    <h1>Best Characters</h1>
  </header>
);

export default Character;

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  species: PropTypes.string.isRequired
};