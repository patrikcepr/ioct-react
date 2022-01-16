import React, { useContext } from 'react';
import AppContext from '../../store/appContext';

import styles from './Header.module.sass';

const Header = () => {
  const ctx = useContext(AppContext);

  return (
    <header className={styles.header}>
      <h1>
        {ctx.lang === 'en'
          ? 'Medical Institutions List'
          : 'Seznam lékařských zařízení'}
      </h1>
    </header>
  );
};

export default Header;
