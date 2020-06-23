import React from 'react';

export default function TitleComponent(props) {
	const { children } = props;

	return (
		<span
			style={{
				marginTop: '35px',
				marginLeft: '100px',
				fontSize: '30px',
				color: '#7f7f7f',
				fontWeight: 'bold',
			}}>
			{children}
		</span>
	);
}
