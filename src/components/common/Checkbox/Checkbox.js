import React from 'react';

import Styles from './Checkbox.module.scss';

function Checkbox (props) {
    const { onChange, isChecked, name, value } = props;

    return (
      <label>
        {name}
        <input
          name={name}
          value={value}
          type="checkbox"
          onChange={onChange}
          checked={isChecked}
          className={Styles.checkbox}
        />
      </label>
    );
}

export default Checkbox;
