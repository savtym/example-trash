import React from 'react';
import Styles from './Headline.module.scss';


export const Types = {
    error: Styles.red,
    success: Styles.green,
};

function Headline(props) {
    const name = 'hi its variable things';
    const { children, type } = props;

    return (
        <h1 className={type}> {children} Компонента {name} </h1>
    )
}

export default Headline;