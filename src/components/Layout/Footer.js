import React, { useContext } from 'react';

import AppContext from '../../store/appContext';

import styles from './Footer.module.sass';

const Footer = () => {
  const ctx = useContext(AppContext);

  return (
    <footer className={styles.footer}>
      <h4>
        {`DataSource: 
        ${
          ctx.apikey.length > 0
            ? 'https://api.golemio.cz/v2/'
            : 'https://private-anon-510a79a142-golemioapi.apiary-mock.com/v2/'
        }`}
      </h4>
    </footer>
  );
};

export default Footer;
