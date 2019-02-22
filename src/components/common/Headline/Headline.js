import React from 'react';
import Styles from './Headline.module.scss';

function Headline(props) {
    const { children } = props;

    return (
        <h1 className={Styles.headline}> {children} </h1>
    )
}

export default Headline;