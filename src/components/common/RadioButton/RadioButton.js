import React from 'react';

import Styles from './RadioButton.module.scss';

function RadioButton (props) {
  const { onChange, isChecked, label } = props;

  return (
    <div className={Styles.radio}>
      <label>
        <input
          type="radio"
          value={label}
          checked={isChecked}
          onChange={onChange} />
        {label}
      </label>
    </div>

  );
}

export default RadioButton;
