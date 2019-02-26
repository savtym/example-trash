import React from 'react';

import Styles from './Mark.module.scss';

function Mark(props) {

    return (
        <label>
            <input value={props.value} onChange={props.onMarkChange}
            />
        </label>
    );
}

export default Mark;