import React, { useContext } from 'react';

import AppContext from '../../store/appContext';

import styles from './NavLang.module.sass';

const NavLang = () => {
  const ctx = useContext(AppContext);

  return (
    <div className={styles.navlang}>
      <ul>
        <li onClick={ctx.onChooseLang.bind(null, 'cs')}>CZ</li>
        <li>/</li>
        <li onClick={ctx.onChooseLang.bind(null, 'en')}>ENG</li>
      </ul>
    </div>
  );
};

export default NavLang;
