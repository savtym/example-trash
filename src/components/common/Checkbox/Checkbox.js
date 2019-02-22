import React from 'react';

import Styles from './Checkbox.module.scss';

function Checkbox (props) {
    const { defaultValue, onChange, isChecked } = props;

    return (
        <div className={Styles.box}>
            <span>Change background?</span>
            <input
                className={Styles.checkbox}
                type="checkbox"
                onChange={onChange}
                checked={isChecked}
            />
        </div>
    );
}

export default Checkbox;
