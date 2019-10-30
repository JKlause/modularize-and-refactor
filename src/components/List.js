import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

const List = ({ items, Component }) => {

  const myComponents = items.map(item => {
    return <Component key={item.name} {...item}/>;
  });

  return (
    <React.Fragment className={styles.app}>
      {myComponents}
    </React.Fragment>
  );
};

export default List;

List.propTypes = {
  items: PropTypes.array.isRequired,
  Component: PropTypes.func.isRequired,
};

