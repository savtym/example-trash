import React from 'react';

import Styles from './Input.module.scss';

function Input(props) {
  const { value, onChange } = props;

  return (
    <input
      className={Styles.input}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;