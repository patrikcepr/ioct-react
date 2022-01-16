import React from 'react';

// import AppContext from '../../store/appContext';

import styles from './Footer.module.sass';

const Footer = () => {
  // const ctx = useContext(AppContext);

  return (
    <footer className={styles.footer}>
      <h4>Datasource: Operator ICT a.s., 2022</h4>
    </footer>
  );
};

export default Footer;
