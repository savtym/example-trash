import React from 'react';

import Styles from './Select.module.scss';

const Select = (props) => {
    const { options, defaultValue } = props;
    return (
        <select className={Styles.select} defaultValue={defaultValue}>
            {options.map(({value, label}) => (
                <option value={value} label={label} className={Styles.option} />
            ))}
        </select>
    );
}

export default Select;
