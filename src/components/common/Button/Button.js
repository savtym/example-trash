import React from 'react';
import Styles from './Button.module.scss';


export const Types = {
	error: Styles.error,
	success: Styles.success,
};


function Button(props) {
	const { children, type } = props;

	return (
		<button
			className={type}
		>
			Test: {children}
		</button>
	)
}

export default Button;
