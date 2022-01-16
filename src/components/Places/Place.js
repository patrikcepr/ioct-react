import React from 'react';

import styles from './Place.module.sass';

const Place = (props) => {
  return (
    <div className={styles.place}>
      <h3>{props.name}</h3>
      <p>{props.addr}</p>
    </div>
  );
};

export default Place;
