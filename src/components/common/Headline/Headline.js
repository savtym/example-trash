import React from 'react';

function Headline(props) {
    const name = 'hi its variable things';
    const { children, type } = props;

    return (
        <h1> {children} Компонента {name} </h1>
    )
}

export default Headline;