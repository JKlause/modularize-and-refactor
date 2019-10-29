import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ img, name, species }) => (
  <dl>
    <dt>Img</dt>
    <dd>{img}</dd>
  
    <dt>Name</dt>
    <dd>{name}</dd>
  
    <dt>species</dt>
    <dd>{species}</dd>
  </dl>
);

export default Character;

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  species: PropTypes.string.isRequired
};
