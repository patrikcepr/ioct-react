import React, { useContext } from 'react';
import Place from './Place';

import AppContext from '../../store/appContext';

import styles from './Places.module.sass';

const Places = () => {
  const ctx = useContext(AppContext);

  return (
    <div className={styles.places}>
      {ctx.data.map((place, index) => {
        return (
          <Place
            key={place.properties.id}
            id={place.properties.id}
            index={index}
            name={place.properties.name}
            addr={place.properties.address.street_address}
          />
        );
      })}
    </div>
  );
};

export default Places;
