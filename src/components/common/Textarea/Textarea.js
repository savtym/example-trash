import React from 'react';

// import Styles from './Textarea.module.scss';

function Textarea( props ) {
	const { onChange, value } = props;

	return (
		<textarea
			value={value}
			onChange={onChange}
		/>
	);
}

export default Textarea;