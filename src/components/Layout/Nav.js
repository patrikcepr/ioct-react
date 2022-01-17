import React from 'react';
import ApiForm from '../ApiForm/ApiForm';
import NavLang from './NavLang';

// import AppContext from '../../store/appContext';

import styles from './Nav.module.sass';

const Nav = () => {
  // const ctx = useContext(AppContext);

  return (
    <nav className={styles.nav}>
      <ApiForm />
      <NavLang />
    </nav>
  );
};

export default Nav;
