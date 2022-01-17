import React from 'react';

// import AppContext from '../../store/appContext';

import styles from './Footer.module.sass';

const Footer = () => {
  // const ctx = useContext(AppContext);

  return (
    <footer className={styles.footer}>
      <h4>Datasource: https://operator-ict.gitlab.io</h4>
    </footer>
  );
};

export default Footer;
