import React, { Fragment, useContext } from 'react';
import ReactDom from 'react-dom';

import AppContext from '../../../store/appContext';

import styles from './Modal.module.sass';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const Modal = (props) => {
  const ctx = useContext(AppContext);

  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={ctx.hideModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default Modal;
