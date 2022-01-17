import React, { useContext } from 'react';
import Button from '../UI/Button/Button';

import AppContext from '../../store/appContext';

import styles from './Place.module.sass';

const Place = (props) => {
  const ctx = useContext(AppContext);

  return (
    <div className={styles.place}>
      <h3>{props.name}</h3>
      <p>{props.addr}</p>
      <Button
        style={styles.button}
        onClick={ctx.showModal.bind(null, props.index)}
      >
        {ctx.lang === 'en' ? 'more info...' : 'více...'}
      </Button>
    </div>
  );
};

export default Place;
