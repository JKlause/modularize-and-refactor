import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items, Component }) => {

  const myComponents = items.map(item => {
    // eslint-disable-next-line react/jsx-key
    return <Component {...item}/>;
  });

  return (
    <>
      {myComponents}
    </>
  );
};

export default List;

List.propTypes = {
  items: PropTypes.array.isRequired,
  Component: PropTypes.func.isRequired,
};

