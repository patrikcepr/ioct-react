import React, { useRef } from 'react';

import Input from '../UI/Input/Input';

import styles from './ApiForm.module.sass';

const ApiForm = () => {
  const apiInputRef = useRef();

  return (
    <form className={styles.apiform}>
      <Input
        ref={apiInputRef}
        label='Api klíč'
        input={{ type: 'text', id: 'apiKey' }}
      />
    </form>
  );
};

export default ApiForm;
