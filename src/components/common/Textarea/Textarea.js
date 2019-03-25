import React from 'react';

function Textarea(props) {
	const { onChange, value } = props;

	return (
		<textarea
			placeholder="Your text"
			value={value}
			onChange={onChange}
		/>
	);
}

export default Textarea;