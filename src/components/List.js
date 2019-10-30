import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.css';

const List = ({ items, Component }) => {

  const myComponents = items.map(item => {
    return <Component key={item.name} {...item}/>;
  });

  return (
    <div className={styles.list}>
      {myComponents}
    </div>
  );
};

export default List;

List.propTypes = {
  items: PropTypes.array.isRequired,
  Component: PropTypes.func.isRequired,
};

