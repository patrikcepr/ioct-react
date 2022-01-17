import React, { useContext } from 'react';

import AppContext from '../../store/appContext';

import styles from './PlaceDetails.module.sass';

const PlaceDetail = () => {
  const ctx = useContext(AppContext);

  const name = ctx.detail.properties.name;
  const address = ctx.detail.properties.address.address_formatted;
  const email = ctx.detail.properties.email[0];
  const tel = ctx.detail.properties.telephone[0];
  const type = ctx.detail.properties.type.description;
  const web = ctx.detail.properties.web[0];
  const openingHours = ctx.detail.properties.opening_hours;
  const schedule = openingHours.map((day) => {
    return (
      <div className={styles.day} key={day.day_of_week}>
        <div>{day.day_of_week}</div>
        <div>{day.opens}</div>
        <div>{day.closes}</div>
      </div>
    );
  });

  return (
    <div className={styles['place-detail']}>
      <h4>{type}</h4>
      <h2>{name}</h2>
      <p>{address}</p>
      <div className={styles.link}>
        <a href={`${web}`} target='_blank' rel='noreferrer'>
          {web}
        </a>
      </div>
      <div className={styles.link}>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className={styles.link}>
        <a href={`tel:+420 ${tel}`}>+420 {tel}</a>
      </div>
      <div className={styles['opening-hours']}>
        <h4>{ctx.lang === 'en' ? 'Opening hours' : 'Otevírací doba'}</h4>
        {schedule}
      </div>
    </div>
  );
};

export default PlaceDetail;
