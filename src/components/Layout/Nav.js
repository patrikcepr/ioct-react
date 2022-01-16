import React, { useContext } from 'react';
import ApiForm from '../ApiForm/ApiForm';

import AppContext from '../../store/appContext';

import styles from './Nav.module.sass';

const Nav = () => {
  const ctx = useContext(AppContext);

  return (
    <nav className={styles.nav}>
      <ApiForm />
      <ul>
        <li onClick={ctx.onChooseLangCzech}>CZ</li>
        <li> / </li>
        <li onClick={ctx.onChooseLangEnglish}>ENG</li>
      </ul>
    </nav>
  );
};

export default Nav;
