import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items, Component }) => {

  const myComponents = items.map(item => {
    return <Component key={item.name} {...item}/>;
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

