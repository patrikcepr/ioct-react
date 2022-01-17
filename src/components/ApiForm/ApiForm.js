import React, { useRef, useContext } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import AppContext from '../../store/appContext';

import styles from './ApiForm.module.sass';

const ApiForm = () => {
  const ctx = useContext(AppContext);
  const apiInputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const userApiKey = apiInputRef.current.value.trim();
    // console.log(userApiKey);
    ctx.setApikey(userApiKey);
    apiInputRef.current.value = '';
  };

  return (
    <form className={styles.apiform} onSubmit={submitFormHandler}>
      <Input
        ref={apiInputRef}
        label={ctx.lang === 'en' ? 'Api Key' : 'Api klíč'}
        input={{ type: 'text', id: 'apiKey' }}
      />
      <Button type='submit' style={styles.button}>
        {ctx.lang === 'en' ? 'Submit' : 'Použít'}
      </Button>
    </form>
  );
};

export default ApiForm;
