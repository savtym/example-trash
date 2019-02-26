import React from 'react';

import Styles from './Mark.module.scss';

function Mark({ onChange, value }) {

    return (
            <input className={Styles.input} value={value} onChange={onChange}
            />
    );
}

export default Mark;