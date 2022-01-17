import React, { useRef } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import styles from './ApiForm.module.sass';

const ApiForm = () => {
  const apiInputRef = useRef();

  const submitFormHandler = () => {};

  return (
    <form className={styles.apiform} onSubmit={submitFormHandler}>
      <Input
        ref={apiInputRef}
        label='Api klíč'
        input={{ type: 'text', id: 'apiKey' }}
      />
      <Button type='submit' style={styles.button}>
        Použít
      </Button>
    </form>
  );
};

export default ApiForm;
