import React from 'react';

import Styles from './Select.module.scss';


function Select (props) {
    const { options, defaultValue, onChange } = props;

    return (
        <select
          className={Styles.select}
          defaultValue={defaultValue}
          onChange={onChange}
        >
            {options.map(({value, label}) => (
                <option
                    key={value}
                    value={value}
                    label={label}
                    className={Styles.option}
                />
            ))}
        </select>
    );
}

export default Select;
